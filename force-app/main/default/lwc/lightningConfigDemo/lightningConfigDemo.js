import { api, LightningElement } from 'lwc';

export default class LightningConfigDemo extends LightningElement {
    @api recordId
    @api heading
    @api levels
    @api age 
}