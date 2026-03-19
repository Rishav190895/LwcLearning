import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class CreateRecordDemo extends LightningElement {
     formfields ={}
     handleChange(event){
        const{name , value} = event.target
        this.formfields[name] = value
     }
     handleClick(){
        const recordInput = {apiName:CONTACT_OBJECT.objectApiName, fields:this.formfields}
        createRecord(recordInput).then(result=>{
            this.showToast('Contact Record Created',`Contact Record Created ${result.id}`,'success')
            this.template.querySelector('.reset').reset()
            this.formfields = {}
        }).catch(error=>{
            this.showToast('Error Creating Record',error.body.message,'error')
        })
     }
     showToast(title,message,variant){
        const evt = new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(evt)
     }
}