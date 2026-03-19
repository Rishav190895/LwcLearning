import { LightningElement } from 'lwc';

export default class CssInLwc extends LightningElement {
    number
    handleChange(event){

        this.number = event.target.value
    }
    get percentage(){
        return `width: ${this.number}%`
    }
    isLoaded = false
    renderedCallback(){
        if(this.isLoaded) return
        const style = document.createElement('style')
        style.innerText = `c-css-in-lwc .slds-button{
        color : red;
        background : aqua;
        }`
        this.template.querySelector('lightning-button').appendChild(style)
        this.isLoaded = true
    }
}