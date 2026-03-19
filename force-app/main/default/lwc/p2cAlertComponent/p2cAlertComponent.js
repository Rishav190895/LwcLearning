import { api, LightningElement } from 'lwc';

export default class P2cAlertComponent extends LightningElement {
    @api message
    @api isValid
    @api data
    @api number
}