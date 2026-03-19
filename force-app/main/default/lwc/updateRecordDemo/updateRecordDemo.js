import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { updateRecord } from 'lightning/uiRecordApi';
const cols =[
    {fieldName:'Id',label:'Id'},
    {fieldName:'Title',label:'Title'},
    {fieldName:'Name',label:'Name'},
    {fieldName:'Phone',label:'Phone', type:'tel', editable:true},
    {fieldName:'Email',label:'Email' ,type:'email',editable:true}
]
export default class UpdateRecordDemo extends LightningElement {
    contacts =[]
    columns = cols
    draftValues = []
    @wire(getListUi, { 
        objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts'
    })
    getAccountData({data,error}){ 
        if(data){
            console.log(data);
            this.contacts = data.records.records.map(item=>{
                return {
                    'Id':item.id,
                    'Title':item.fields.Title.value,
                    'Name':item.fields.Name.value,
                    'Phone':item.fields.Phone.value,
                    'Email':item.fields.Email.value
                }
            })

        }
        if(error){
            console.error(error);
        }

    }
    handleSave(event){
        console.log(event.detail.draftValues);
        const recordInputs = event.detail.draftValues.map(item=>{
            const fields = {...item}
            return {fields:fields}
        })
        const promises = recordInputs.map(recordInput=>updateRecord(recordInput))
        Promise.all(promises).then(()=>{
            console.log('Contact Updated Succesfuuly')
            this.draftValues = []
        }).catch(error=>{
            console.error('Error Occured',error)
        })
        
         
    }
   
}