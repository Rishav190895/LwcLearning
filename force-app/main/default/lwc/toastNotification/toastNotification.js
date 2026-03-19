import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastNotification extends LightningElement {
    handlerToastone(){
        this.showEvent('Success','{0} Account Created Succesfully!! {1}','success')
    }

    handlerToasttwo(){
        this.showEvent('Error','Account Creation Failed!!','error')
    }

    handlerToastthree(){
        this.showEvent('Warning','Password Should have 15 Characters!!','warning')
    }

    handlerToastfour(){
        this.showEvent('Info','Summer 20 release available','info')
    }

    showEvent(title,message,variant){
        const eve = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce',{
                    url:'https://www.salesforce.com/in/?ir=1',
                    label:'Click Here'
                }
            ],
            mode:'sticky'
        })
        this.dispatchEvent(eve)
    }
}