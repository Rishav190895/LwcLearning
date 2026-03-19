import { LightningElement } from 'lwc';

export default class WrapperModel extends LightningElement {
    isOpen = false
    handleClick(){
        console.log('Clicked')
        this.isOpen = true
    }
    closeHandler(){
        this.isOpen = false
    }
}