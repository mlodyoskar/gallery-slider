const mainImage = document.querySelector(".img");
const images = document.querySelectorAll(".images__img");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const imageArray = [
  "img1",
  "img2",
  "img3",
  "img4",
  "img5",
  "img6",
  "img7",
  "img8",
  "img9",
  "img10",
];

let i = 0;

const getImage = (index) => {
  return "photos/" + imageArray[index] + ".jpg";
};

images.forEach((e) => {
  e.src = getImage(i++);
});
console.log("Wartość i po pierwszych 3 zdjęciach: " + i);

rightArrow.addEventListener("click", () => {
  i++;
  images.forEach((e) => {
    e.src = getImage(i);
  });
  console.log(i);
});
