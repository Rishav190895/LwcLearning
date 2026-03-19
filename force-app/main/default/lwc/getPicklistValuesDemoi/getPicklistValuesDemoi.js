import { LightningElement, wire } from 'lwc';
import {getPicklistValues, getObjectInfo} from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPicklistValuesDemoi extends LightningElement {
    recortypeId
    selectedIndustry= ''
    industryoptions = []
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo({data,error}){
        if(data){
            this.recortypeId = data.defaultRecordTypeId
        }
    }

    @wire(getPicklistValues, {recordTypeId:'$recortypeId',fieldApiName:INDUSTRY_FIELD})
    picklistValue({data,error}){
        if(data){
             console.log('Data ', data)
             this.industryoptions=[...this.generatePickList(data)]

        }
        else if(error){
            console.error(error)
        }
       
    }

    generatePickList(data){
        return data.values.map(item=>({label:item.label ,value:item.value}))
    }
    
   

    handleChange(event) {  
        this.selectedIndustry = event.detail.value;
    }
} 