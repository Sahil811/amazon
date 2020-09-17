import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:5001/fir-4a7fe/us-central1/api",
  baseURL: "https://us-central1-fir-4a7fe.cloudfunctions.net/api",
});

export default instance;
