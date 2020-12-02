import {Student} from "./student.js"
import {Fun} from "./fun.js"
import "./card.js"
import { getdataFromdocs,getstudentfrom } from "./thee.js"
 
const fun = new Fun()
const getonedocument = async() =>{
    const collection = await firebase.firestore().collection("student")
    const red = await collection.get()
    const docs = red.docs
    const data = getdataFromdocs(docs)
    data.map((Element)=>{
        const student = getstudentfrom(Element)
        Fun.them(student)
    })
    document.getElementById("mina").innerHTML = fun.showlist()
}
