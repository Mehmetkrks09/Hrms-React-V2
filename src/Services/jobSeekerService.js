import axios from "axios"

export default  class JobSeekerService{
    getJobSeeker()
    {
        return axios.get("http://hrms-java.herokuapp.com/api/jobSeekers/getall")
    }
    postJobSeeker(){
        return axios.post("http://hrms-java.herokuapp.com/api/jobSeekers/register")
    }
    getById(values){
        return axios.get("http://hrms-java.herokuapp.com/api/jobSeekers/getById?id="+values)
    }
}  