import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import USER_NAME from '@salesforce/schema/User.Name'
import USER_EMAIL from '@salesforce/schema/User.Email'
const fields = [USER_NAME,USER_EMAIL]
export default class WireDemoUserDetail extends LightningElement {
    
    userId = Id 
    userDetail

    //005Aw00000LYE1FIAX
    // here we can not use dirctly userId because we are importing it.
    // so it is async process. To use this variable here we have to make it reactive with $
    // else it will through an error. 

    @wire(getRecord,{recordId:'$userId',fields:fields})
    userDetailHandler({data,error}){
        if(data){
            //console.log(data)
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
        
    }
    @wire(getRecord,{recordId:'$userId',fields:fields})
    userDetailProperty
}