import { LightningElement } from 'lwc';

export default class Model extends LightningElement {
    handleClose(){
        this.dispatchEvent(new CustomEvent('close'))
    }

    handleSlotFooterChange(){
        const footerEle = this.template.querySelector('.slds-modal__footer')
        if(footerEle){
            footerEle.classList.remove('slds-hide')
        }
    }

    handleSlotHeaderChange(){
        const headerEle = this.template.querySelector('.slds-modal__header')
        if(headerEle){
            headerEle.classList.remove('remove-heading')
        }
    }
}