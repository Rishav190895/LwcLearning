import { LightningElement } from 'lwc';

export default class C2pModaalComponent extends LightningElement {
    handleClick(){
        const evt = new CustomEvent('close',{
           // bubbles:true,
            detail:{
                message:'Hello World'
            }
        })
        this.dispatchEvent(evt)
    }

    footerHandler(){
        console.log('Fotter called')
    }
}