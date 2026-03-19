import { api, LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData';
import hasCustomPermission from '@salesforce/customPermission/show_details'
import Form_Factor from '@salesforce/client/formFactor';
import ID from '@salesforce/user/Id';
import is_Guest from '@salesforce/user/isGuest'

export default class CheckPermissionDemo extends LightningElement {
    get hasViewAllDataAvailable(){
        return hasViewAllData
    }

    get hasCustomPermissionAvailable(){
        return hasCustomPermission
    }
    formFactor = Form_Factor;

    userId = ID
    isGuest = is_Guest

    
}