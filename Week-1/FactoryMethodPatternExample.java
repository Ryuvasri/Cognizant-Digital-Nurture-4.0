//FactoryMethodPatternExample.
import java.util.*;
public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document word = wordFactory.createDocument();
        word.open();
        word.docRead();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();
        pdf.docRead();
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excel = excelFactory.createDocument();
        excel.open();
        excel.docRead();
    }
}
interface Document {
    void docRead();
    void open();
}
class WordDocument implements Document 
{
    public void docRead() {
        System.out.println("Reading Word Document.");
    }
    public void open() {
        System.out.println("Opening Word Document.");
    }
}
class PdfDocument implements Document 
{
    public void docRead() {
        System.out.println("reading PDF Document.");
    }
    public void open() {
        System.out.println("Opening PDF Document.");
    }
}
class ExcelDocument implements Document 
{
    public void docRead() {
        System.out.println("reading Excel Document.");
    }
    public void open() {
        System.out.println("Opening Excel Document.");
    }
}

abstract class DocumentFactory 
{
    public abstract Document createDocument();
}

class WordDocumentFactory extends DocumentFactory 
{
    public Document createDocument() 
    {
        System.out.println("Word Document Created.");
        return new WordDocument();
    }
}

class PdfDocumentFactory extends DocumentFactory 
{
    
    public Document createDocument() 
    {
        System.out.println("Pdf Document Created.");
        return new PdfDocument();
    }
}

class ExcelDocumentFactory extends DocumentFactory 
{
    public Document createDocument() 
    {
        System.out.println("Excel Document Created.");
        return new ExcelDocument();
    }
}
