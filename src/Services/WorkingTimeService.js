import axios from "axios";
export default class WorkingTimeService{

add(){
    return axios.post("https://hrms-java.herokuapp.com/api/workingTime/add")
}
getAll(){
    return axios.get("https://hrms-java.herokuapp.com/api/workingTime/getAll")
}


}   