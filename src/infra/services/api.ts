import axios from "axios";
// STORAGE
//import { store } from 'data/store';

import { BASE_API } from "../config/api";

const api = axios.create({
  baseURL: BASE_API
});

// export function apiToken() {
//   return {
//     headers : {
//       Authorization: store.getState().session.token
//     }
//   }
// }

export default api;