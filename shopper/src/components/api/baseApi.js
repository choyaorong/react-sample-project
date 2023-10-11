import axios from "axios";

const BASE_URL = "https://api.edamam.com/api";
const ingredientsAPI = axios.create({ baseURL: BASE_URL });

export default ingredientsAPI;