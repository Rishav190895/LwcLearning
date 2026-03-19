import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isVisible = false
    constructor(){
        super();{
            console.log('Parent Constructor')
        }
    }
    connectedCallback(){
        console.log('Parent Connected Callback')
    }
    renderedCallback(){
        console.log('Parent Rendered Callback')
    }
    name
    handleChange(event){
        this.name = event.target.value
    }
    handleClick(){
       this.isVisible = !this.isVisible
    }
    errorCallback(error,stack){
        console.log(error.message)
        console.log(stack)
    }
}