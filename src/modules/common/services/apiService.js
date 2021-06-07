import axios from "axios"
import { API_BASE_URL } from "../constants";
import {getNormalizedData} from "./normalizationService";

export const getInitialData = async () => {
    const {data} = await axios.get(`${API_BASE_URL}/getInitialData`);
    const normalizedData = getNormalizedData(data);
    return normalizedData;
}
