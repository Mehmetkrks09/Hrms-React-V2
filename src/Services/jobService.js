import axios from "axios"

export default class JobService{

getJobs(){
    return axios.get("http://hrms-java.herokuapp.com/api/jobs/getall")
}

postJob(){
    return axios.post("http://hrms-java.herokuapp.com/api/jobs/add")
}  

}