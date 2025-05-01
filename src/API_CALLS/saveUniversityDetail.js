import api from "./api";

export function saveUniversity(body, token) {
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
export async function deleteUniversity(_id, token) {
  console.log(token);
  try {
    const response = await api.delete("/college/deleteuniversity", {
      data: { college_id: _id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
