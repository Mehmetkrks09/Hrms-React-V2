import axios from "axios"

export default class SchoolService{

    postSchool(){
        return axios.post("http://hrms-java.herokuapp.com/api/cv/school/add")
    } 

    getByGrudutionYear(){
        return axios.get("http://hrms-java.herokuapp.com/api/cv/school/ByGrudutionYear")
    }

    getAll(){
        return axios.get("http://hrms-java.herokuapp.com/api/cv/school/getAll")
    }
}  