import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'

export default class CurrentPageRef extends LightningElement {
    @wire(CurrentPageReference)
    pageRef

    get pageRefernce(){
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2) : ''
    }
}