public with sharing class pdfPageController {
    public String pdfText{get;set;}
    public pdfPageController() {
        pdfText = ApexPages.currentPage().getParameters().get('pdfText');
    
    }
}