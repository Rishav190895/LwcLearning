import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
export default class FilteringAndSorting extends LightningElement {
      headings=["Id","Name","Title","Email"]
      contactData = []
      filteringData = []
      timer
      filterBy = 'Name'
      sortedBy = 'Name'
      sordDirection='asc' 

    @wire(getContactList)
    contactHandler({data,error}){
        if(data){
            console.log(data);
            this.contactData = data;
            this.filteringData = [...this.filterSort(data)]
          
        }
        if(error){
            console.log(error);
        }
        
    }

    get filterbyOptions(){
        return [
            {label:"All",value:'All'},
            {label:"Id",value:'Id'},
            {label:"Name",value:'Name'},
            {label:"Title",value:'Title'},
            {label:"Email",value:'Email'}
        ]
    }
    filterByHandler(event){
        this.filterBy = event.target.value; 
    }

    handleChange(event){
        const {value} = event.target
         window.clearTimeout(this.timer)
        if(value){
            this.timer = window.setTimeout(()=>{
                console.log(value)
                this.filteringData = this.contactData.filter(eachObj=>{
                    if(this.filterBy === 'All'){
                        return Object.keys(eachObj).some(key=>{
                        return eachObj[key].toLowerCase().includes(value)
                        // This logic will work for all the object
                       //Object.keys(eachObj) = [Id,Name,Title,Email]                      
                })
            }
            else{
                 const val = eachObj[this.filterBy] ? eachObj[this.filterBy]:''
                 return val.toLowerCase().includes(value)
            }
            })
          
            },500)
            
        }
        else{
            this.filteringData = [...this.contactData]
        }
        
        
    }
    get sortedbyOptions(){
        return[
            {label:"Id",value:'Id'},
            {label:"Name",value:'Name'},
            {label:"Title",value:'Title'},
            {label:"Email",value:'Email'}
        ]
    }

    sortedByHandler(event){
        this.sortedBy = event.target.value;
        this.filteringData = [...this.filterSort(this.filteringData)]
          
    }
    filterSort(data){
        const cloneData = [...data]
        cloneData.sort((a,b)=>{
            if(a[this.sortedBy] === b[this.sortedBy]){
                return 0;
            }
            return this.sordDirection === 'desc' ?
            a[this.sortedBy] > b[this.sortedBy] ? -1:1 :
            a[this.sortedBy] < b[this.sortedBy] ? -1:1
        })
        return cloneData
    }
}