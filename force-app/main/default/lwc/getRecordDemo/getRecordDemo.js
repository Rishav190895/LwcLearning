import { api, LightningElement, wire } from 'lwc';
import {getRecord, getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

const FIELDS = [
    ACCOUNT_NAME_FIELD,
    ANNUAL_REVENUE_FIELD,
    'Account.Owner.Name'   // relationship field as string
];

export default class GetRecordDemo extends LightningElement {
    @api recordId
    name
    AnnualRevenue
    Owner
    @wire(getRecord, {recordId:'$recordId', fields:FIELDS})
   // @wire(getRecord, {recordId:'$recordId', layoutTypes:['Full'], modes:['View']})
    recordData({data,error}){
        if(data){
            console.log('Account Rec '+data)
            // this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue: data.fields.Name.value
            // this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue:data.fields.AnnualRevenue.value
            // this.Owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value

            this.name= getFieldValue(data,ACCOUNT_NAME_FIELD)
            this.AnnualRevenue = getFieldDisplayValue(data,ANNUAL_REVENUE_FIELD)
            this.Owner = getFieldValue(data,'Account.Owner.Name')

        }
        if(error){
            console.error(error);
        }
    }
}