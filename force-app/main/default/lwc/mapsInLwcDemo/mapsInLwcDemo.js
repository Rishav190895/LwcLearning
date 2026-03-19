import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/mapController.getAccounts'

export default class MapsInLwcDemo extends LightningElement {
    mapMarkers=[]
    markerTitle = 'Accounts Location'
    selectMarker
    @wire(getAccounts)
    fetchAccount({data,error}){
        if(data){
            console.log(data)
            this.formatedData(data)
        }
        if(error){
            console.error(error)
        }
    }
    formatedData(data){
        this.mapMarkers = data.map(item=>{
            return{
                location:{
                    City:item.BillingCity || '',
                    State:item.BillingState || '',
                    Country:item.BillingCountry || '',
                    PostalCode:item.BillingPostalCode || '',
                    Street:item.BillingStreet || ''
                },
                title:item.Name,
                description:item.description,
                icon:'utility:salesforce1'
            }
        })
        this.selectMarker = this.mapMarkers.length && this.mapMarkers[0].value
    }
    callMarkerSelect(event){
        this.selectMarker = event.detail.selectedMarkerValue
    }
}