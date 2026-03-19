import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import TYPE from '@salesforce/schema/Account.Type';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecodForm extends LightningElement {
    object=ACCOUNT_OBJECT
    fieldList=[ACCOUNT_NAME,ANNUAL_REVENUE,TYPE,INDUSTRY]
    handleSuccess(event){
        console.log(event.detail.id);
        const evt =new ShowToastEvent({
            title:'Account Created',
            message:'Account Id'+event.detail.id,
            variant:'success'
        })
        this.dispatchEvent(evt);
    }
}