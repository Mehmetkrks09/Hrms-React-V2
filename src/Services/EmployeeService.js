import axios from "axios";

export default class EmployeeService{
    getAllEmployee(){
        return axios.get("http://hrms-java.herokuapp.com/api/employees/getAll")
    }
    postEmployee(values){
        return axios.post("http://hrms-java.herokuapp.com/api/employees/register",values)
    }
    putEmployee(values){
        return axios.put("http://hrms-java.herokuapp.com/api/employees/update",values)
    }
    
}           