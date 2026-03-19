import { LightningElement, wire } from 'lwc';
import typeAccountFilter from '@salesforce/apex/AccountController.typeAccountFilter'

export default class WireApexWithPram extends LightningElement {
    selectedItem=''
    @wire(typeAccountFilter, {type:'$selectedItem'})
    accounts
     
    get getTypes(){
        return [
            {label:'Customer - Direct' , value:'Customer - Direct'},
             {label:'Customer - Channel' , value:'Customer - Channel'}
        ]
    }

    handleChange(event){
    this.selectedItem = event.target.value
}
}

