import axios from "axios";

export default class ForeignLanguageService{

 add(values){
     return axios.post("http://hrms-java.herokuapp.com/api/cv/foreignLanguage/add"+values)
 }

 getAll(){
     return axios.get("http://hrms-java.herokuapp.com/api/cv/foreignLanguage/getAll");
 }

}