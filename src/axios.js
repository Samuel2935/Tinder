
import axios from 'axios'
const instance = axios.create({
    baseURL: "https://back-tin.herokuapp.com"  //i repplaced my backend api with that of heroku server
})
export default instance;