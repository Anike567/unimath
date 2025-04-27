import api from "./api";

// Function to get all enquiries
export const getAllEnquiries = async (token) => {
  try {
    const result = await api.post(
      "/enquiries/getallenquiry",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
export const markResolved = async (id, token) => {
  const body = { id };
  try {
    const result = await api.patch("/enquiries/markedasresolved", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (result && result.data) {
      return result;
    } else {
      throw new Error("No response data");
    }
  } catch (err) {
    throw err;
  }
};

export const markUnResolved = async (id, token) => {
  const body = { id };
  try {
    const result = await api.patch("/enquiries/markedasunresolved", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (result && result.data) {
      return result;
    } else {
      throw new Error("No response data");
    }
  } catch (err) {
    throw err;
  }
};

export const getResolved = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(
        "/enquiries/getresolvedenquiry",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result && result.data) {
        resolve(result.data);
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const getUnResolved = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await api.post(
        "/enquiries/getunresolvedenquiry",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result && result.data) {
        resolve(result.data);
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
