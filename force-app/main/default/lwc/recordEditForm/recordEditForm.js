import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Contact.AccountId';
import TITLE_FIELD from '@salesforce/schema/Contact.Title'

export default class RecordEditForm extends LightningElement {
    objectName=CONTACT_OBJECT
    fields={
        nameField:NAME_FIELD,
        emailField:EMAIL_FIELD,
        phoneField:PHONE_FIELD,
        accountField:ACCOUNT_NAME_FIELD,
        titleField:TITLE_FIELD
    }
    handleClick(){
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){
            Array.from(inputFields).forEach(field=>{
                field.reset()
            })
        }
    }
}