import axios from "axios"

export default class SchoolService{

    postSchool(){
        return axios.post("https://hrms-java.herokuapp.com/api/cv/school/add")
    } 

    getByGrudutionYear(){
        return axios.get("https://hrms-java.herokuapp.com/api/cv/school/ByGrudutionYear")
    }

    getAll(){
        return axios.get("https://hrms-java.herokuapp.com/api/cv/school/getAll")
    }
}  