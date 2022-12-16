const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 5000,
  },
});

const part = document.querySelector(".parntner-logos");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let box = document.querySelector(".logo-box");
var para = document.getElementById("text");
let accordion = document.querySelector(".accordion");

const mobileView = document.getElementById("mobile-menu");
const items = document.querySelector(".nav-items");
let list = document.querySelectorAll(".list-items");
mobileView.addEventListener("click", myFunction);

function myFunction() {
  items.classList.toggle("active");
  mobileView.classList.toggle("is-active");
  console.log(items);
}
//  Accordions Datas

const fqa = [
  {
    question: "How can i reqister?",
    ans: "You can reqister through the login page, or contact us",
  },
  {
    question: "How many course can You offer?",
    ans: "Visit our Course page the see the list of course we offer",
  },
  {
    question: "Can i make a partial payment?",
    ans: "Yes u can",
  },
  {
    question: "Is it only for corpers?",
    ans: "No. Megabrains infotech institute is for everybody",
  },
  {
    question: "Where is your head office?",
    ans: "Our head office is in Gombe state.",
  },
];
// const func = function funAcco(i){
//   if(fqa ==i){
//     console.log('hello')
//   }
// }
fqa.map((questions, i) => {

  const { question, ans } = questions;
  const div = document.createElement("div");
  div.classList = `accordion-div`;
  const btnItem = document.createElement("button");
  div.appendChild(btnItem);
  btnItem.classList = `accordion-btn`;
  btnItem.innerHTML = question;
  accordion.appendChild(div);
  let paragraph = document.createElement("div");
  paragraph.innerHTML = "Ans:" + " " + ans;
div.appendChild(paragraph)
    btnItem.addEventListener("click", () => {
      btnItem.classList.toggle("active");
          paragraph.classList.toggle("active");


  });
});
          paragraph.classList.toggle("active");


