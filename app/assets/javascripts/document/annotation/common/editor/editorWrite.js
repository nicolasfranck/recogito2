/**
 *
 * TODO there is now a hardcoded dependency between the editor and text selection functionality.
 * We'll need to break this dependency up in order to re-use the editor in image annotation mode.
 *
 */
define([
  'common/utils/annotationUtils',
  'common/utils/placeUtils',
  'common/api',
  'document/annotation/common/editor/editorBase',
  'document/annotation/common/editor/replyField',
  'document/annotation/common/georesolution/georesolutionPanel'],

  function(AnnotationUtils, PlaceUtils, API, EditorBase, ReplyField, GeoresolutionPanel) {

  var WriteEditor = function(container, highlighter, selectionHandler) {
    var self = this,

        element = (function() {
          var el = jQuery(
                '<div class="text-annotation-editor">' +
                  '<div class="arrow"></div>' +
                  '<div class="text-annotation-editor-inner">' +
                    '<div class="category-buttons">' +
                      '<div class="category-container">' +
                        '<div class="category place">' +
                          '<span class="icon">&#xf041;</span> Place' +
                        '</div>' +
                      '</div>' +
                      '<div class="category-container">' +
                        '<div class="category person">' +
                          '<span class="icon">&#xf007;</span> Person' +
                        '</div>' +
                      '</div>' +
                      '<div class="category-container">' +
                        '<div class="category event">' +
                          '<span class="icon">&#xf005;</span> Event' +
                        '</div>' +
                      '</div>' +
                    '</div>' +
                    '<div class="sections"></div>' +
                    '<div class="reply-container"></div>' +
                    '<div class="footer">' +
                      '<button class="btn small outline cancel">Cancel</button>' +
                      '<button class="btn small outline ok-next">OK &amp Next</button>' +
                      '<button class="btn small ok">OK</button>' +
                    '</div>' +
                  '</div>' +
                '</div>');

          jQuery(container).append(el);
          el.hide();
          return el;
        })(),

        btnPlace = element.find('.category.place'),
        btnPerson = element.find('.category.person'),
        btnEvent = element.find('.category.event'),

        btnCancel = element.find('button.cancel'),
        btnOkAndNext = element.find('button.ok-next'),
        btnOk = element.find('button.ok'),

        replyContainer = element.find('.reply-container'),

        replyField = new ReplyField(replyContainer),

        georesolutionPanel = new GeoresolutionPanel(),

        annotationMode = { mode: 'NORMAL' },

        setAnnotationMode = function(mode) {
          annotationMode = mode;
        },

        openSelection = function(selection) {
          if (selection.isNew) {
            // Branch based on annotation mode
            // TODO can we move dependency on mode outside the editor?
            if (annotationMode.mode === 'NORMAL') {
              self.open(selection.annotation, selection.bounds);
            } else if (annotationMode.mode === 'QUICK') {
              // Quick modes just add an annotation body and trigger instant OK
              self.currentAnnotation = selection.annotation;

              if (annotationMode.type === 'PLACE') {
                API.searchPlaces(AnnotationUtils.getQuote(selection.annotation)).done(function(response) {
                  var quote = AnnotationUtils.getQuote(selection.annotation),
                      body = { type: 'PLACE', status: { value: 'UNVERIFIED' } };

                  if (response.total > 0)
                    body.uri = PlaceUtils.getBestMatchingRecord(response.items[0], quote).uri;

                  selection.annotation.bodies.push(body);
                  onOK();
                });
              } else if (annotationMode.type === 'PERSON') {
                selection.annotation.bodies.push({ type: 'PERSON' });
                onOK();
              }
            } else if (annotationMode.mode === 'BULK') {
              // TODO implement
            }
          } else {
            self.open(selection.annotation, selection.bounds);
          }

          return false;
        },

        /** Click on 'Place' button adds a new PLACE body **/
        onAddPlace = function() {
          self.sectionList.createNewSection({ type: 'PLACE', status: { value: 'UNVERIFIED' } });
        },

        /** Click on 'Person' button adds a new PERSON body **/
        onAddPerson = function() {
          // TODO implemenet
        },

        /** Click on 'Event' button adds a new EVENT body **/
        onAddEvent = function() {
          // TODO implemenet
        },

        /** 'Cancel' clears the selection and closes the editor **/
        onCancel = function() {
          selectionHandler.clearSelection();
          self.sectionList.clear();
          element.hide();
        },

        /** 'OK' updates the annotation & highlight spans and closes the editor **/
        onOK = function() {
          var reply = replyField.getComment(), annotationSpans,
              hasChanged = reply || self.sectionList.hasChanged();

          if (hasChanged || annotationMode.mode === 'QUICK') {
            self.sectionList.commitChanges();

            // Push the current reply body, if any
            if (reply)
              self.currentAnnotation.bodies.push(reply);

            // Determine which CRUD action to perform
            if (self.currentAnnotation.annotation_id) {
              // There's an ID - annotation already stored on the server
              if (AnnotationUtils.isEmpty(self.currentAnnotation)) {
                // Annotation empty - DELETE
                highlighter.removeAnnotation(self.currentAnnotation);
                self.fireEvent('deleteAnnotation', self.currentAnnotation);
              } else {
                // UPDATE
                annotationSpans = highlighter.refreshAnnotation(self.currentAnnotation);
                self.fireEvent('updateAnnotation', self.currentAnnotation);
              }
            } else {
              // No ID? New annotation from fresh selection - CREATE if not empty
              if (AnnotationUtils.isEmpty(self.currentAnnotation)) {
                selectionHandler.clearSelection();
              } else {
                selection = selectionHandler.getSelection();
                if (selection.isNew)
                  highlighter.convertSelectionToAnnotation(selection, self.currentAnnotation);
                selectionHandler.clearSelection();
                self.fireEvent('updateAnnotation', self.currentAnnotation);
              }
            }
          } else {
            selectionHandler.clearSelection();
          }

          element.hide();
        },

        /** Shortcut: triggers OK and moves the editor to the next annotation **/
        onOKAndNext = function() {
          onOK();
          self.toNextAnnotation();
        },

        /** User clicked 'change georesolution' - open the panel **/
        onChangeGeoresolution = function(section) {
          georesolutionPanel.open(AnnotationUtils.getQuote(self.currentAnnotation), section.body);
        },

        /** Georesolution was changed - forward changes to the section list **/
        onGeoresolutionChanged = function(placeBody, diff) {
          self.sectionList.updateSection(placeBody, diff);
        };

    // Georesolution change
    georesolutionPanel.on('change', onGeoresolutionChanged);

    // Ctrl+Enter on the reply field doubles as 'OK'
    replyField.on('submit', onOK);

    // Button events
    btnPlace.click(onAddPlace);
    btnPerson.click(onAddPerson);
    btnEvent.click(onAddEvent);

    btnCancel.click(onCancel);
    btnOk.click(onOK);
    btnOkAndNext.click(onOKAndNext);

    this.openSelection = openSelection;
    this.setAnnotationMode = setAnnotationMode;
    this.replyField = replyField;

    EditorBase.apply(this, [ container, element, highlighter ]);

    // Events from the section List
    this.sectionList.on('submit', onOK);
    this.sectionList.on('change', onChangeGeoresolution);

    // ESC key doubles as 'Cancel'
    this.on('escape', onCancel);

    // TODO handle click on background document -> cancel
  };
  WriteEditor.prototype = Object.create(EditorBase.prototype);

  /** Extends the clear method provided by EditorBase **/
  WriteEditor.prototype.clear = function() {
    this.replyField.clear();
    EditorBase.prototype.clear.call(this);
  };

  /** Extends the open method provided by EditorBase **/
  WriteEditor.prototype.open = function(annotation, bounds) {
    EditorBase.prototype.open.call(this, annotation, bounds);

    if (AnnotationUtils.countComments(annotation) > 0)
      this.replyField.setPlaceHolder('Write a reply...');

    return false;
  };

  return WriteEditor;

});
