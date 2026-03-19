import { api, LightningElement } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api message;
    handleClick(){
       const evt = new CustomEvent('sndmsg',{
            detail:{
                'msg':'Passing data from lwc to aura'
            }
        })
        this.dispatchEvent(evt)
    }
}