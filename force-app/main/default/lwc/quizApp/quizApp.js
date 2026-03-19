import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected = {} // for storing values
    answer = 0 // to store no of correct answer
    result = false // to show when quiz is submitted
    quizQuestion = [{

        id:1,
        question:'What is the capital of India?',
        options:{
            a:'Mumbai',
            b:'Delhi',
            c:'Chennai'
        },
        answer:'Delhi'
    },
    {
        id:2,
        question:'What is the capital of France?',
        options:{
            a:'Mumbai',
            b:'Delhi',
            c:'Paris'
        },
        answer:'Paris'
    },
    {
        id:3,
        question:'What is the capital of USA?',
        options:{
            a:'Washington DC',
            b:'Delhi',
            c:'Chennai'
        },
        answer:'Washington DC'
    }
]

get isSubmitDisabled() {
    return !(Object.keys(this.selected).length === this.quizQuestion.length)
} 


handleChange(event){
    //console.log(event.target.name)
    //console.log(event.target.value)
    const {name,value} = event.target   // destructuring
    this.selected = {...this.selected,[name]:value}

}
submitClick(event){
    event.preventDefault()
    let a = this.quizQuestion.filter(item=>this.selected[item.id] === item.answer)
    this.answer = a.length
    console.log('Correct Answer',this.answer)
     this.result = true

}

resetClick(){
    this.selected={}
    this.answer = 0
    this.result = false
}

get isScoredFull(){
    return `slds-text-heading_large ${this.answer === this.quizQuestion.length ?
        `slds-text-color_success` : `slds-text-color_error`
    }`
}
}       