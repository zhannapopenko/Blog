import axios from "axios";

const baseURL: string = 'https://simple-blog-api.crew.red/';

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }
});