import api from "./api";

export default function saveUniversity(body, token) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/college/adduniversity", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        resolve(response.data);
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}
