import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class ImperativeApexDemo extends LightningElement {
    accounts
    handleClick(){
    getAccountList().then(result=>{
        this.accounts = result
    }).catch(error=>{
        console.error(error)
    })
}
}