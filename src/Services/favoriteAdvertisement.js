import axios from "axios";
export default class FavoriteAdvertisementService{

    postFavoriteAdvertisement(values){
        return axios.post("https://hrms-java.herokuapp.com/api/favoriteAdvertisement/add",values)
    }
    getByJobSeekerId(id){
        return axios.get("https://hrms-java.herokuapp.com/api/favoriteAdvertisement/getByJobSeekerId?id="+id)
    }

    deleteFav(id){
        return axios.post("https://hrms-java.herokuapp.com/api/favoriteAdvertisement/delete?id="+id)
    }

}  