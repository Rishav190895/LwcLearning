import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordEditValidation extends LightningElement {
    objectName = ACCOUNT_OBJECT
    inputValue=''

    handleChange(event){
        this.inputValue = event.target.value
    }

    handleSubmit(event){
       event.preventDefault()
       const inpData= this.template.querySelector('lightning-input')
       const value = inpData.value
       if(!value.includes('India')){
        inpData.setCustomValidity("The account name must include 'India'")
       }
       else{
        inpData.setCustomValidity("")
        const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
       }
       inpData.reportValidity()

    }
    handleSuccess(event){
        const evt = new ShowToastEvent({
            title:'Account Created',
            message:'Record Id:'+event.detail.id,
            variant:'success'
        })
        this.dispatchEvent(evt)
    }
    handleError(event){
        const evt = new ShowToastEvent({
            title:'Error Occured',
            message: event.detail.message,
            variant:'error'
        })
        this.dispatchEvent(evt)
    }
}