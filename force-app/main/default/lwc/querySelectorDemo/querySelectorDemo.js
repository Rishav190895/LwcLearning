import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {
    carList = ['BMW','Honda City','Audi','Maruti']
    handleClick(){
        const elem = this.template.querySelector('h2');
        elem.style.border ='1px solid red'
        console.log(elem.innerText)

        const UserElement = this.template.querySelectorAll('.demo')
        Array.from(UserElement).forEach((item)=>{
            console.log(item.innerText)
            item.setAttribute("title",item.innerText) // when we hover on the element 
            // it will show the text
        })

        // lwc:dom="manual" --> Demo
        const childElement = this.template.querySelector('.child')
        childElement.innerHTML = '<p> Hi I am In Child Element</p>'
    }
}