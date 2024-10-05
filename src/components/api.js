//API를 호출하고 결괏값을 반환하는 역할을 하는 페이지

const API_URL = "https://animal-api-two.vercel.app/";

export const request = async () => {
  let res = await fetch(API_URL);
  try {
    if (res) {
      let data = await res.json();
      return data.photos;
    }
  } catch (err) {
    console.log(err);
  }
};
