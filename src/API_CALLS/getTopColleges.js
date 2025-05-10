import axios from "axios";
import api from "./api";

const getTopColleges = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.get("/user/");
      console.log(res);

      if (res.data) {
        console.log(res.data);
        resolve(res.data);
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export default getTopColleges;
