import { LightningElement, wire } from 'lwc';
import getOpportunityList from '@salesforce/apex/OpportunityController.getOpportunityList'
export default class charts extends LightningElement {
    pieChartLabels=[]
    pieChartData=[]
    @wire(getOpportunityList)
    opportunityHandler({data, error}){
        if(data){
            console.log(data)
            const result = data.reduce((json, val)=>({...json, [val.StageName]:(json[val.StageName]|0)+1}), {})
            if(Object.keys(result).length){
                this.pieChartLabels = Object.keys(result)
                this.pieChartData = Object.values(result)
            }
        
        }
        if(error){
            console.error(error)
        }
    }
}