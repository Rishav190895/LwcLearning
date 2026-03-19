({
    handleMessage1 : function(component,message) {
        if(message != null && message.getParam('lmsData')!= null){
            component.set('v.messageReceived',message.getParam('lmsData').value)
        }
    },
    handleInput:function(component,event){
        console.log(event.target.value)
        component.set('v.messageValue',event.target.value)
    },
    handlePublish:function(component){
        let msg = component.get('v.messageValue')
        let message ={
            lmsData:{
                value:msg
            }
        }
        component.find('SampleMessageChannel').publish(message)
    }
})