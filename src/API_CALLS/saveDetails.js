import axios from "axios";
import api from "./api";

export function saveStudentDetails(body, token) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/enquiries/addstudents", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        resolve(response.data);
      }
    } catch (err) {
      reject(err);
    }
  });
}
