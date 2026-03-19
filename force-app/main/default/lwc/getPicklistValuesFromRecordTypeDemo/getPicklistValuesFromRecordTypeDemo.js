import { LightningElement, wire } from 'lwc';
import {getPicklistValuesByRecordType, getObjectInfo} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValuesFromRecordTypeDemo extends LightningElement {
    ratingoptions
    indusrtyoptions
    recordTypeId
    selectedIndustry
    selectedRating
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    getRecordData({data,error}){
        if(data){
            this.recordTypeId = data.defaultRecordTypeId
        }
    }
    @wire(getPicklistValuesByRecordType, {objectApiName:ACCOUNT_OBJECT,recordTypeId:'$recordTypeId'})
    picklistValue({data,error}){
        if(data){
            console.log('Object Data ', data)
            this.ratingoptions = this.picklistGenerator(data.picklistFieldValues.Rating)
            this.indusrtyoptions = this.picklistGenerator(data.picklistFieldValues.Industry)
        }
        if(error){
            console.error(error)
        }
    }

    picklistGenerator(data){
        return data.values.map(item => ({label: item.label, value: item.value }))
    } 

    handleChange(event){
        if(event.target.name ==='Rating'){
            this.selectedRating = event.target.value
        }
        if(event.target.name ==='Industry'){
            this.selectedIndustry = event.target.value
        }

    }

}