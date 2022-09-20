import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods":
    "PUT, GET, POST, DELETE, OPTIONS, GET, POST, OPTIONS",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  Accept: "*/*",
};
const $http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers,
});

export { $http };

// Access-Control-Allow-Headers: origin, x-requested-with, content-type, DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range
// Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS, GET, POST, OPTIONS
// Access-Control-Allow-Origin: *
// Access-Control-Expose-Headers: Content-Length,Content-Range
