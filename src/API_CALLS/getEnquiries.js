import api from "./api";

const getAllEnquiries = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(
        "http://192.168.1.12:3000/enquiries/getallenquiry"
      );

      console.log(result);

      if (result.data) {
        resolve(result.data.enquiries);
      } else {
        reject("No data received");
      }
    } catch (err) {
      reject(err); // Pass the actual error for debugging
    }
  });
};

export default getAllEnquiries;
