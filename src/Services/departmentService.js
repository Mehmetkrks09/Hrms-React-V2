import axios from "axios"

export default class DepartmentService{


getDepartment(){
    return axios.get("https://hrms-java.herokuapp.com/api/cv/department/getAll")
}


    postDepartment( Department){
        return axios.post("https://hrms-java.herokuapp.com/api/cv/department/add")
    }
}