import api from "./api";

export function saveStudentDetails(body) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/enquiries/addstudents", body);
      if (response.data) {
        resolve(response.data);
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}
