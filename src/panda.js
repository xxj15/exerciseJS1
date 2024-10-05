const API_URL = "https://animal-api-two.vercel.app/";

const $content = document.querySelector("div.content");
let template = [];

const getData = async (name) => {
  let res = await fetch(`${API_URL}${name}`);
  try {
    if (res) {
      let data = await res.json();
      data.photos.forEach((elm) => {
        template += `<img src="${elm.url}"></img>`; // 여러개의 이미지 태그를 template 이라는 변수에 모두 담음
      });
      $content.innerHTML = template;
    }
  } catch (err) {
    console.log(err);
  }
};

getData("panda");
