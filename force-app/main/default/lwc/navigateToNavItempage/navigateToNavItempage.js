import { LightningElement } from 'lwc';
import {NavigationMixin} from'lightning/navigation'
export default class NavigateToNavItempage extends NavigationMixin(LightningElement) {
    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName: 'Memory_Game_In_Lwc'
            }
        })
    }

    navigateToRecordReleationshipPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'001Au000012Ud9UIAS',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }

    navigateToWebPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://www.google.com'
            }
        })
    }
}