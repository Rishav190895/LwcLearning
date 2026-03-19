import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class PubsubComponentA extends LightningElement {
    message
    handleInput(event){
        this.message = event.target.value

    }
    handleClick(){
        pubSub.publish('componentA',this.message)
    }

}