import axios from "axios";
export default class WorkingTimeService{

add(){
    return axios.post("http://hrms-java.herokuapp.com/api/workingTime/add")
}
getAll(){
    return axios.get("http://hrms-java.herokuapp.com/api/workingTime/getAll")
}


}   