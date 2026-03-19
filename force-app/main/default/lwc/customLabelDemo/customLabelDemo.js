import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.descriptionone'
import DESCRIPTION_TWO from '@salesforce/label/c.descriptiontwo'
export default class CustomLabelDemo extends LightningElement {
    LABELS={
        descriptionone:DESCRIPTION_ONE,
        descriptiontwo:DESCRIPTION_TWO

    }
}