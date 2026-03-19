import { api, LightningElement, wire } from 'lwc';
import {getRecordUi} from 'lightning/uiRecordApi';
export default class GetRecordUIDemo extends LightningElement {
    formFields = [
    {fieldName:"Name" ,"label":"Name"},
    {fieldName:"AnnualRevenue" ,"label":"Annual Revenue"},
    {fieldName:"Phone" ,"label":"Phone"},
    {fieldName:"Rating" ,"label":"Rating"}]

    @api recordId
    @wire(getRecordUi, {recordIds:'$recordId',layoutTypes:'Full',
        modes:'Edit'
    })
    getRecordDetail({data,error}){
        if(data){
            console.log('Records are',data)
            this.formFields = this.formFields.map(item=>{
                return {...item,value:data.records[this.recordId].fields[item.fieldName].value}
        })
        }
        if(error){
            console.error(error)
        }
    }
}