import {Student} from "./student.js"
export class Fun{
    classroom;
    Studentlist;
    constructor(){

        this.Studentlist=[];

    }
    them(student){
        //this.Studentlist.push(student); c1
        if(student instanceof Student){
            this.Studentlist.push(student);
        }else{
            alert("nhap linh tinh");
        }
    }
   showlist(){
    let hmtl= ``
    this.Studentlist.map((student)=>{
        hmtl += `<card-container Name = "${this.Name}" age="${this.age}" classroom = "${this.classroom}" hometown = "${this.hometown}"> </card-container>`
    })
    return hmtl;
}
}    
export default Fun