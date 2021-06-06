import axios from "axios"
import { API_BASE_URL } from "../constants";

export const getInitialData = async () => {
    const {data} = await axios.get(`${API_BASE_URL}/getInitialData`);
    return data;
}