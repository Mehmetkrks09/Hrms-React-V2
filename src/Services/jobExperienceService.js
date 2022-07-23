import axios from "axios"

export default class JobExperienceService{

    getByGrudutionYear(){
        return axios.get("https://hrms-java.herokuapp.com/api/cv/jobExperience/ByGrudutionYear")
    }

    getAll(){
        return axios.get("https://hrms-java.herokuapp.com/api/cv/jobExperience/getAll");
    }

    add(values){
        return axios.post("https://hrms-java.herokuapp.com/api/cv/jobExperience/add"+values)
    }

}     