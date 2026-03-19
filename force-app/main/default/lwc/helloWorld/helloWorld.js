        import { LightningElement, track } from 'lwc';

        export default class HelloWorld extends LightningElement {
        //Local Properties      
        name // undefined
            age = 30
            fullName = 'Salesforce India'
            obj ={
                place:'Mumbai',
                country:'India'
            }
            userlist = ['a','b','c']

            topic = "Zero to Hero"
            title = 'AURA'

            handleChange(event){
                this.title = event.target.value;
            }
            
            // track properties @track works for both object and array.

        @track address = {
            city:'Mumbai',
            state:'Maharastra',
            country:'India'
        }
        handleTrack(event){
            this.address.city = event.target.value
        // if you don't want to use track then -> this.address ={...this.address,city:event.target.value}
        }
        // in case of array
        @track userlist1 = ['A','B','C']
        handleTrack1(event){
            this.userlist1[1]= event.target.value
        }

        // Getter and its use

        num1= 10
        num2 = 20
        get sumOfNumber(){
            return this.num1 + this.num2
        }
        Userdata = ['Raghav','Sachin','Ekansh']
        get funData(){
            return this.Userdata[2]
        }

        isVisible = false
        handleClick(){
            this.isVisible = true
        }
        
        data;
        handleData(event){
            this.data = event.target.value
        }
        get matchData(){
            return this.data === 'hello'
        }
        carlist = ['Ford','Hyundai','Maruti','Tata','Mahindra']

        bikeList = [{
            id:1,
            name:'Honda',
            price:200000
        },
        {
            id:2,
            name:'Bajaj',
            price:100000
        },
        {
            id:3,
            name:'TVS',
            price:150000

        }]

        ceoList =[{
            id:1,
            name:'Bill Gates',
            company:'Microsoft',
            salary:100000000
        },
        {
            id:2,
            name:'Elon Musk',
            company:'Tesla',
            salary:1000000000
        },
    {
            id:3,
            name:'Mark Zuckerberg',
            company:'Facebook',
            salary:10000000000
        }]
        
        }