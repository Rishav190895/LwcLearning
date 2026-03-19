import { LightningElement } from 'lwc';
import renderTemplate from './renderMethod.html'
import signoutTemplate from './signoutTemplate.html'
import signinTemplate from './signinTemplate.html'
export default class RenderMethod extends LightningElement {

    isSelected = ''
    render(){
        return this.isSelected === 'SignIn' ?
        signinTemplate : this.isSelected === 'SignOut' ?
        signoutTemplate : renderTemplate
    }

    handleClick(event){
        this.isSelected = event.target.label

    }
    handleSubmit(event){
        alert(`${event.target.label} Succesfully!!`)
    }
}