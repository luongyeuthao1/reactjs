import axios from "axios";

export default axios.create({
    baseURL: "https://5f13a2bc2710570016b37801.mockapi.io/api",
    headers: {
        "Content-type": "application/json"
    }
});