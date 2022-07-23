import axios  from "axios";
export default class CityService{

    getAll(){
        return axios.get("https://hrms-java.herokuapp.com/api/city/getAll")
    }
    add(){
        return axios.post("https://hrms-java.herokuapp.com/api/city/add")
    }
    

}        