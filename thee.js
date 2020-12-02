import {Student} from "./student.js"
export const getstudentfrom = (data)=> {
    const {Name,age,classroom,hometown} =data
    return new Student(Name,age,classroom,hometown)
}
export const getdataFromdocs=(docs) => {
    return docs.map((doc)=> {
        const data = doc.data()
        data.id = doc.id
        return data
    })
}