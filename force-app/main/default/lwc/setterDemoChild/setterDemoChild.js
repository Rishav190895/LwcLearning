import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userdata
   @api 
   get detail(){
    return this.userdata
   }
   set detail(data){
     let newage = data.age*2
     this.userdata = {...data, age:newage,"city":"Melbourne"}
}
}