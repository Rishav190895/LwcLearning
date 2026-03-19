import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class WireMethodDemo extends LightningElement {
    accountList
    @wire(getAccountList)
    accounts
    
    @wire(getAccountList)
    accountHandler({data,error}){
        if(data){
            this.accountList= data.map(item=>{
                const typeItem = item.Type ==='Customer - Direct'?'Direct':
                item.Type === 'Customer - Channel'?'Channel':'--------'
                return {...item,typeItem}
            })
        }
        if(error){
            console.log(error)
        }
        
    }
}   