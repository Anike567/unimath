import api from "./api";

const getTopColleges = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.get("/");

      if (res.data) {
        resolve(res.data); // no need for res.data.json()
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export default getTopColleges;
