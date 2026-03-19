import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    isVisible = false
    msg

    handleOpen(){
    this.isVisible =true
}

handleClick(event){
    this.msg = event.detail.message
    this.isVisible = false
}
}

