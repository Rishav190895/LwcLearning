import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();{
            console.log('Child Constructor')
        }
    }
    connectedCallback(){
        console.log('Child Connected Callback')
        throw new Error('Error Occured')
        //window.addEventListener('click',this.handleClick)
    }
    renderedCallback(){
        console.log('Child Rendered Callback')
    }
    disconnectedCallback(){
        alert('Component Disconnected Callback')
        //window.removeEventListener('click',this.handleClick)
    }
}