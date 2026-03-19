import { api, LightningElement } from 'lwc';
import generatePdf from '@salesforce/apex/pdfController.generatePdf'

export default class PdfGenerationLwc extends LightningElement {
    @api recordId
    invoiceData ={
        invoiceNo:'123',
        invoiceCreated:'2022-01-01',
        invoiceDue:'2022-01-10',
        companyName:'Rishav Industries',
        address1:'123 Main St',
        address2:'Dharamshala, HP'
    }
    clientData = {
        client:'Acme Corp',
        username:'John Doe',
        email:'john1@gmail.com'
    }
    services = [
        {name:'Consultant Fee', amount:1000},
        {name:'Website Design', amount:500},
        {name:'Hosting(2 months)', amount:400}
    ]
    get totalAmount(){
        return this.services.reduce((total,service)=>{
            return total =  total+service.amount
        },0)
    }
    handleClick(){
        let data = this.template.querySelector('.Container')
        console.log(data.outerHTML)
        generatePdf({recordId:this.recordId,htmlData:data.outerHTML}).then(result=>{
            console.log("attachment id" ,result)
        }).catch(error=>{
           console.error(JSON.stringify(error, null, 2));
        })
    }
} 