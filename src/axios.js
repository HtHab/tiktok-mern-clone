import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern-cl.herokuapp.com/",
});

export default instance;
