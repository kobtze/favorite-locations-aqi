import Axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/" : "//localhost:8080/";

var axios = Axios.create({
  withCredentials: true,
});

export const httpService = {
  get(endpoint, data) {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint, data) {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint, data) {
    return ajax(endpoint, "PUT", data);
  },
  delete(endpoint, data) {
    return ajax(endpoint, "DELETE", data);
  },
  BASE_URL
};

async function ajax(endpoint, method = "GET", data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data
    });
    
    return res;
  } catch (err) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}. Data:`, data
    );
    console.dir(err);
    throw err;
  }
}
