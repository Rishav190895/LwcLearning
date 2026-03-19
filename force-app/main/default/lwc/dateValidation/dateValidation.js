import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {
    startDate
    endDate
    error
    handleChange(event){
      const {name,value} = event.target
      this[name] = value 

      //const name = event.target
      //const value = event.target
      //this[name] = value //this.startDate = value
    }

    handleSubmit(){
      
        if(this.validateDate(this.startDate,this.endDate)){
              console.log('Date is Correct')
        }
        else{
            this.error = 'End Date must be greater than Start Date'
        }
    }

    validateDate(startDate,endDate){
        return new Date(startDate).getTime() < new Date(endDate).getTime()
    }
}