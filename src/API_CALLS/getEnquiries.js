import api from "./api";

// Function to get all enquiries
export const getAllEnquiries = async () => {
  try {
    const result = await api.post("/enquiries/getallenquiry");
    console.log(result);

    if (result.data) {
      return result.data.enquiries;
    } else {
      throw new Error("No data received");
    }
  } catch (err) {
    throw err;
  }
};

// Function to mark an enquiry as resolved
export const markResolved = async (id) => {
  const body = { id };
  try {
    const result = await api.patch("/enquiries/markedasresolved", body);
    console.log(result.data);

    if (result && result.data) {
      return result;
    } else {
      throw new Error("No response data");
    }
  } catch (err) {
    throw err;
  }
};

export const markUnResolved = async (id) => {
  const body = { id };
  try {
    const result = await api.patch("/enquiries/markedasunresolved", body);
    console.log(result.data);

    if (result && result.data) {
      return result;
    } else {
      throw new Error("No response data");
    }
  } catch (err) {
    throw err;
  }
};

export const getResolved = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post("/enquiries/getresolvedenquiry");
      if (result && result.data) {
        resolve(result.data);
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const getUnResolved = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post("/enquiries/getunresolvedenquiry");
      if (result && result.data) {
        resolve(result.data);
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
