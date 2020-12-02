import "./student.js"
class cardd extends HTMLElement{
    constructor(){
        super()
        this.shadowDom = this.attachShadow({mode: "open"})
    }
    thuqq(){
        this.Name = this.getAttribute("Name")
        this.age = this.getAttribute("age")
        this.classroom = this.getAttribute("classroom")
        this.hometown = this.getAttribute("hometown")
        this.shadowDom.innerHTML = `
        ${stylle}
        <div class= "card">
        <div class= "classroom">${this.classroom}</div>
        <div class= "Name">${this.Name}</div>
        <div class= "age">${this.age}</div>
        <div class= "hometown">${this.hometown}</div>
        </div>
        `
    }
}
const stylle =`
<style>
    .card{
        width: 30px;    
        padding:15px;
        border: 2px #rgb(100, 11, 11) solid;
     font-family:cursive, Helvetica, sans-serif;
    }
    .Name{
        color:blue;
        font-size: 24px;
        font-weight: 30px;
    }
    .classroom{
        color:red;
        font-size: 24px;
        font-weight: 30px;
    }
    .hometown{
        color: rgb(69, 6, 94);
        font-size: 24px;
        font-weight: 30px;
    }
    .age{
        color:pink;
        font-size: 24px;
        font-weight:30px;
    }
    </style>
`
window.customElements.define("card-container",cardd)