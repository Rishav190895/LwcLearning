import { LightningElement, wire } from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi'

export default class GetNavItemDemo extends LightningElement {
    result
    @wire(getNavItems, {
        navItemsName:['standard-Account'],
        pageSize:30
    })
    navItemDeatils({data,error}){
        if(data){
            console.log('Data ',data)
            this.result = data.navItems[0]
        }
    }
}