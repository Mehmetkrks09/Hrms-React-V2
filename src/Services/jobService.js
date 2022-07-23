import axios from "axios"

export default class JobService{

getJobs(){
    return axios.get("https://hrms-java.herokuapp.com/api/jobs/getall")
}

postJob(){
    return axios.post("https://hrms-java.herokuapp.com/api/jobs/add")
}  

}