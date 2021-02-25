
/* Initialize Axios for Vue.js 2 CRUD HTTP Client 
-------------------------------------------------

1- npm install axios
2- (see below)    */

import axios from "axios";

export default axios.create( {
  baseURL: "http://localhost:8083/api",
  headers: { "Content-type": "application/json" }
});


/* Remember to change the baseURL, it depends 
on REST APIs url that your Server configures.*/