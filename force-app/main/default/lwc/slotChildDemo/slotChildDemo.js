import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {
    handleChange(){
        const elem = this.template.querySelector('.slds-card__footer')
        if(elem){
            elem.classList.remove('slds-hide')
        }
    }
}