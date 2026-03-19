import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class PubsubComponentB extends LightningElement {
    message
    connectedCallback(){
        this.callSubscriber()
    }

    callSubscriber(){
        pubSub.subscribe('componentA',(message)=>{
            this.message = message
        })
    }
}