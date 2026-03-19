import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';
import DIR from '@salesforce/i18n/dir';
export default class InternationalizationProperty extends LightningElement {
    dir = 'rtl' //DIR
    number = 12345.678
    formattedNumber = new Intl.NumberFormat(LOCALE,{
        style:'currency',
        currency:CURRENCY,
        currencyDisplay:'symbol'
    }).format(this.number)
}