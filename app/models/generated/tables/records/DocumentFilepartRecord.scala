/**
 * This class is generated by jOOQ
 */
package models.generated.tables.records


import java.lang.Integer
import java.lang.String
import java.util.UUID

import javax.annotation.Generated

import models.generated.tables.DocumentFilepart

import org.jooq.Field
import org.jooq.Record1
import org.jooq.Record6
import org.jooq.Row6
import org.jooq.impl.UpdatableRecordImpl


/**
 * This class is generated by jOOQ.
 */
@Generated(
	value = Array(
		"http://www.jooq.org",
		"jOOQ version:3.7.2"
	),
	comments = "This class is generated by jOOQ"
)
class DocumentFilepartRecord extends UpdatableRecordImpl[DocumentFilepartRecord](DocumentFilepart.DOCUMENT_FILEPART) with Record6[UUID, String, String, String, String, Integer] {

	/**
	 * Setter for <code>public.document_filepart.id</code>.
	 */
	def setId(value : UUID) : Unit = {
		setValue(0, value)
	}

	/**
	 * Getter for <code>public.document_filepart.id</code>.
	 */
	def getId : UUID = {
		val r = getValue(0)
		if (r == null) null else r.asInstanceOf[UUID]
	}

	/**
	 * Setter for <code>public.document_filepart.document_id</code>.
	 */
	def setDocumentId(value : String) : Unit = {
		setValue(1, value)
	}

	/**
	 * Getter for <code>public.document_filepart.document_id</code>.
	 */
	def getDocumentId : String = {
		val r = getValue(1)
		if (r == null) null else r.asInstanceOf[String]
	}

	/**
	 * Setter for <code>public.document_filepart.title</code>.
	 */
	def setTitle(value : String) : Unit = {
		setValue(2, value)
	}

	/**
	 * Getter for <code>public.document_filepart.title</code>.
	 */
	def getTitle : String = {
		val r = getValue(2)
		if (r == null) null else r.asInstanceOf[String]
	}

	/**
	 * Setter for <code>public.document_filepart.content_type</code>.
	 */
	def setContentType(value : String) : Unit = {
		setValue(3, value)
	}

	/**
	 * Getter for <code>public.document_filepart.content_type</code>.
	 */
	def getContentType : String = {
		val r = getValue(3)
		if (r == null) null else r.asInstanceOf[String]
	}

	/**
	 * Setter for <code>public.document_filepart.file</code>.
	 */
	def setFile(value : String) : Unit = {
		setValue(4, value)
	}

	/**
	 * Getter for <code>public.document_filepart.file</code>.
	 */
	def getFile : String = {
		val r = getValue(4)
		if (r == null) null else r.asInstanceOf[String]
	}

	/**
	 * Setter for <code>public.document_filepart.sequence_no</code>.
	 */
	def setSequenceNo(value : Integer) : Unit = {
		setValue(5, value)
	}

	/**
	 * Getter for <code>public.document_filepart.sequence_no</code>.
	 */
	def getSequenceNo : Integer = {
		val r = getValue(5)
		if (r == null) null else r.asInstanceOf[Integer]
	}

	// -------------------------------------------------------------------------
	// Primary key information
	// -------------------------------------------------------------------------
	override def key() : Record1[UUID] = {
		return super.key.asInstanceOf[ Record1[UUID] ]
	}

	// -------------------------------------------------------------------------
	// Record6 type implementation
	// -------------------------------------------------------------------------

	override def fieldsRow : Row6[UUID, String, String, String, String, Integer] = {
		super.fieldsRow.asInstanceOf[ Row6[UUID, String, String, String, String, Integer] ]
	}

	override def valuesRow : Row6[UUID, String, String, String, String, Integer] = {
		super.valuesRow.asInstanceOf[ Row6[UUID, String, String, String, String, Integer] ]
	}
	override def field1 : Field[UUID] = DocumentFilepart.DOCUMENT_FILEPART.ID
	override def field2 : Field[String] = DocumentFilepart.DOCUMENT_FILEPART.DOCUMENT_ID
	override def field3 : Field[String] = DocumentFilepart.DOCUMENT_FILEPART.TITLE
	override def field4 : Field[String] = DocumentFilepart.DOCUMENT_FILEPART.CONTENT_TYPE
	override def field5 : Field[String] = DocumentFilepart.DOCUMENT_FILEPART.FILE
	override def field6 : Field[Integer] = DocumentFilepart.DOCUMENT_FILEPART.SEQUENCE_NO
	override def value1 : UUID = getId
	override def value2 : String = getDocumentId
	override def value3 : String = getTitle
	override def value4 : String = getContentType
	override def value5 : String = getFile
	override def value6 : Integer = getSequenceNo

	override def value1(value : UUID) : DocumentFilepartRecord = {
		setId(value)
		this
	}

	override def value2(value : String) : DocumentFilepartRecord = {
		setDocumentId(value)
		this
	}

	override def value3(value : String) : DocumentFilepartRecord = {
		setTitle(value)
		this
	}

	override def value4(value : String) : DocumentFilepartRecord = {
		setContentType(value)
		this
	}

	override def value5(value : String) : DocumentFilepartRecord = {
		setFile(value)
		this
	}

	override def value6(value : Integer) : DocumentFilepartRecord = {
		setSequenceNo(value)
		this
	}

	override def values(value1 : UUID, value2 : String, value3 : String, value4 : String, value5 : String, value6 : Integer) : DocumentFilepartRecord = {
		this.value1(value1)
		this.value2(value2)
		this.value3(value3)
		this.value4(value4)
		this.value5(value5)
		this.value6(value6)
		this
	}

	/**
	 * Create a detached, initialised DocumentFilepartRecord
	 */
	def this(id : UUID, documentId : String, title : String, contentType : String, file : String, sequenceNo : Integer) = {
		this()

		setValue(0, id)
		setValue(1, documentId)
		setValue(2, title)
		setValue(3, contentType)
		setValue(4, file)
		setValue(5, sequenceNo)
	}
}
