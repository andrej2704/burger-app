import axios from "axios";
const instance = axios.create({
  baseURL: "https://myburger-90ad6.firebaseio.com/"
});

export default instance;
