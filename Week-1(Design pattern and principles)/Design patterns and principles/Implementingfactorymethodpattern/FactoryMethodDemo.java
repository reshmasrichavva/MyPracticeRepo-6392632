

public class FactoryMethodDemo {

    // 🔷 Step 2: Define the Document interface
    interface Document {
        void open();
    }

    // 🔷 Step 3: Concrete Document Classes
    static class WordDocument implements Document {
        public void open() {
            System.out.println("Opening Word document.");
        }
    }

    static class PdfDocument implements Document {
        public void open() {
            System.out.println("Opening PDF document.");
        }
    }

    static class ExcelDocument implements Document {
        public void open() {
            System.out.println("Opening Excel document.");
        }
    }

    // 🔷 Step 4: Abstract Factory
    abstract static class DocumentFactory {
        public abstract Document createDocument();
    }

    // 🔷 Step 4: Concrete Factories
    static class WordFactory extends DocumentFactory {
        public Document createDocument() {
            return new WordDocument();
        }
    }

    static class PdfFactory extends DocumentFactory {
        public Document createDocument() {
            return new PdfDocument();
        }
    }

    static class ExcelFactory extends DocumentFactory {
        public Document createDocument() {
            return new ExcelDocument();
        }
    }

    // 🔷 Step 5: Test the Factory Method Implementation
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordFactory();
        Document word = wordFactory.createDocument();
        word.open();

        DocumentFactory pdfFactory = new PdfFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();

        DocumentFactory excelFactory = new ExcelFactory();
        Document excel = excelFactory.createDocument();
        excel.open();
    }
}
