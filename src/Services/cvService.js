import axios from "axios"

export default class CvService {

getJobSeekerId(id){
    return axios.get("https://hrms-java.herokuapp.com/api/cv/getByJobSeekerId?jobSeekerId="+id)
}
postCv(values){
    return axios.post("https://hrms-java.herokuapp.com/api/cv/add",values)
}
postCvPhoto(id,fd){
    return axios.post("https://hrms-java.herokuapp.com/api/cv/imageUpload?jobSeeker="+id,fd)
}
UpdateCv(values){
    return axios.put("https://hrms-java.herokuapp.com/api/cv/update",values)
}
}