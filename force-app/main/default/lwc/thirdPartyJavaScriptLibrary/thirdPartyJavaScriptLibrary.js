import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'

export default class ThirdPartyJavaScriptLibrary extends LightningElement {
    currentDate=''
    isLibLoaded = false
    renderedCallback(){
        // this is reference to the component
        if(this.isLibLoaded){
            return
        }
        else{
            Promise.all([
            loadScript(this, MOMENT+'/moment/moment.min.js'),
            loadStyle(this,ANIMATE+'/animate/animate.min.css')
        ]).then(()=>{
            //success
            this.setDateOnScreen()
        }).catch(error=>{
            console.error(error)
        })
        this.isLibLoaded = true
        
    }
        }
       
    setDateOnScreen(){
        this.currentDate =moment().format('LLLL')
    }
}

