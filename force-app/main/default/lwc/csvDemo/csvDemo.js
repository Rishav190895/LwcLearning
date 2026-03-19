import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/CsvController.getAccounts'
import {exportCSVFile} from 'c/utility'

export default class csvDemo extends LightningElement { 
   accountData =[]
    accountHeaders={
        Id:"Record Id",
        Name:"Name",
        AnnualRevenue:"Annual Revenue",
        Industry:"Industry",
        Phone:"Phone"
    }
    @wire(getAccounts)
    accountHandler({data, error}){
        if(data){
            console.log(data)
            this.accountData = data
        }
        if(error){
            console.error(error)
        }
    }

    csvGenerator(){
        // utility js 
        //headers, totalData, fileTitle
        console.log('CSV clicked', this.accountData.length);
        exportCSVFile(this.accountHeaders, this.accountData, "account_records")
    }
}