import axios from "axios"

export default class CvService {

getJobSeekerId(id){
    return axios.get("http://hrms-java.herokuapp.com/api/cv/getByJobSeekerId?jobSeekerId="+id)
}
postCv(values){
    return axios.post("http://hrms-java.herokuapp.com/api/cv/add",values)
}
postCvPhoto(id,fd){
    return axios.post("http://hrms-java.herokuapp.com/api/cv/imageUpload?jobSeeker="+id,fd)
}
UpdateCv(values){
    return axios.put("http://hrms-java.herokuapp.com/api/cv/update",values)
}
}