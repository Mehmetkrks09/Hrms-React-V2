import axios from "axios";

export default class ForeignLanguageService{

 add(values){
     return axios.post("https://hrms-java.herokuapp.com/api/cv/foreignLanguage/add"+values)
 }

 getAll(){
     return axios.get("https://hrms-java.herokuapp.com/api/cv/foreignLanguage/getAll");
 }

}