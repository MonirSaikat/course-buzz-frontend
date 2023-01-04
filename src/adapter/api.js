import Axios from "axios";

const env = "development";
const baseURL = "https://cb-backend.onrender.com/api";

export const api = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
