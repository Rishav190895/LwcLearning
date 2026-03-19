import { LightningElement, wire } from 'lwc';
import {getObjectInfo,getObjectInfos} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class GetObjectInfoDemo extends LightningElement {
    objectDetail
    objectdata
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo({data,error}){
        if(data){ 
            //console.log(data)
            this.objectDetail = data.defaultRecordTypeId
        }
        if(error){
           // console.error(error)
        }
    }
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfoProperty
    
    objectApiNames = [ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectData({ data, error }) {
        if (data) {
            console.log('Data:', data);
            this.objectdata = data
        } else if (error) {
            console.error(error);
        }
    }
}