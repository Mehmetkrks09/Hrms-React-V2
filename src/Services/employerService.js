import axios from "axios"

export default class EmployerService{

    getEmployeer(){
return  axios.get("http://hrms-java.herokuapp.com/api/employers/getall")
    }
postEmployer(){

return axios.post("http://hrms-java.herokuapp.com/api/employers/register")

}
EmployerUpdate(values){
    return axios.put("http://hrms-java.herokuapp.com/api/employers/update",values)
}

VerifyUpdate(employerId,employerUpdateId){
    return axios.put("http://hrms-java.herokuapp.com/api/employers/verifyUpdate?employerId="+employerId+"&employerUpdateId="+employerUpdateId)
}

getAllUpdate(){
    return axios.get("http://hrms-java.herokuapp.com/api/employers/getallUpdate")
}

}     