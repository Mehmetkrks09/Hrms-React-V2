import axios from "axios"

export default class DepartmentService{


getDepartment(){
    return axios.get("http://hrms-java.herokuapp.com/api/cv/department/getAll")
}


    postDepartment( Department){
        return axios.post("http://hrms-java.herokuapp.com/api/cv/department/add")
    }
}