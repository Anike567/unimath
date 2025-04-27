import api from "./api";

const getTopColleges = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.get("/user/");

      if (res.data) {
        resolve(res.data);
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export default getTopColleges;
