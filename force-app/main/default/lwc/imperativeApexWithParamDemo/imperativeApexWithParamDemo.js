import { LightningElement } from 'lwc';
import accountName from '@salesforce/apex/AccountController.accountName';

export default class ImperativeApexWithParamDemo extends LightningElement {

    selectedData = '';
    accounts = [];

    handleChange(event) {
        this.selectedData = event.target.value;

            accountName({ searchKey: this.selectedData })
                .then(result => {
                    this.accounts = result;
                })
                .catch(error => {
                    console.error(error);
                });
       
            this.accounts = [];
        
    }
}
