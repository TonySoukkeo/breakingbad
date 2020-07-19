import axios from "axios";
import { BASE_URL } from "./environment";

export default (function () {
  const api = axios.create({
    baseURL: BASE_URL,
  });

  function* getData(action, config) {
    const response = yield api({
      ...config,
      url: config.url ? action + config.url : action,
    });

    return response.data;
  }

  return {
    getData,
  };
})();
