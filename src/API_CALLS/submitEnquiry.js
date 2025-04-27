import api from "./api";

export default function submitEnquiry(selectedCollege, userInfo) {
  const body = {
    university_name: selectedCollege.university_name,
    nirf_ranking: selectedCollege.nirf_rank,
    course_offered: selectedCollege.courses_offered,
    fee_range: selectedCollege.fee_range,
    ...userInfo,
  };

  return new Promise(async (resolve, reject) => {
    try {
      const res = await api.post("/user/enquiry", body);
      if (res.data) {
        resolve(res.data);
      } else {
        reject(new Error("unable to submit enquiry"));
      }
    } catch (err) {
      reject(err);
    }
  });
}
