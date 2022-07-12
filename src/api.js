import axios from "axios";
import store from "./store"

const getAPI = axios.create({
    withCredentials : true,
    baseURL : "https://jsonplaceholder.typicode.com"
})

export async function getPost() {
    return getAPI.get("/posts")
        .then((res)=>{
            store.commit("updatePost", res.data)

            console.log(res.data)

            return res.data
        })
}

export async function getUser() {

}