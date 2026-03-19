import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
import FirstName from '@salesforce/schema/Contact.FirstName';
import LeadSource from '@salesforce/schema/Contact.LeadSource';

export default class NavigationToObject extends NavigationMixin(LightningElement) {
    navigateToObject(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'          
             }
        })
    }

    navigateToObjectWithDafaultValue(){
        const defValues = encodeDefaultFieldValues({
            FirstName:'Rishav',
            LastName:'Gupta',
            LeadSource:'Other'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defValues
            }
        })
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }

    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}