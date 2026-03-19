import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import GROUP_OF_PEOPLE_IMG from '@salesforce/resourceUrl/group_of_people'

export default class StaticResourceDemo extends LightningElement {
    userImage = USER_IMAGE
    groupOfPeople = GROUP_OF_PEOPLE_IMG
}