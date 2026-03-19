public with sharing class pdfController {
   @AuraEnabled
   public static Attachment generatePdf(Id recordId, String htmlData){
    PageReference page = Page.renderAsPdf;
    page.getParameters().put('pdfText', htmlData);

    Attachment attach = new Attachment();
    attach.Name = 'invoice.pdf';
    attach.ParentId = recordId;
    attach.Body = page.getContentAsPDF();
    attach.IsPrivate = false;
    insert attach;
    return attach;

   }
}