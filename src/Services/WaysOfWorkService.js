import axios from "axios";
export default class WaysOfWorkService{

add(){
    return axios.post("https://hrms-java.herokuapp.com/api/wayOfWorking/add")
}
getAll(){
    return axios.get("https://hrms-java.herokuapp.com/api/wayOfWorking/getAll")
}

} 