import axios from "axios";

export default class EmployeeService{
    getAllEmployee(){
        return axios.get("https://hrms-java.herokuapp.com/api/employees/getAll")
    }
    postEmployee(values){
        return axios.post("https://hrms-java.herokuapp.com/api/employees/register",values)
    }
    putEmployee(values){
        return axios.put("https://hrms-java.herokuapp.com/api/employees/update",values)
    }
    
}           