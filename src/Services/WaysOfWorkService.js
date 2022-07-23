import axios from "axios";
export default class WaysOfWorkService{

add(){
    return axios.post("http://hrms-java.herokuapp.com/api/wayOfWorking/add")
}
getAll(){
    return axios.get("http://hrms-java.herokuapp.com/api/wayOfWorking/getAll")
}

} 