import axios  from "axios";
export default class CityService{

    getAll(){
        return axios.get("http://hrms-java.herokuapp.com/api/city/getAll")
    }
    add(){
        return axios.post("http://hrms-java.herokuapp.com/api/city/add")
    }
    

}        