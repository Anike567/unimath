import api from "./api";

const signin = (body) => {
  return new Promise(async (resolve, reject) => {
    api
      .post("/auth/login", body)
      .then((response) => {
        if (response && response.data) {
          resolve(response.data);
        } else {
          reject(new Error("No response data found"));
        }
      })
      .catch((err) => {
        console.error("Signin error:", err);
        reject(new Error("Internal Server occurred, try later"));
      });
  });
};

export default signin;
