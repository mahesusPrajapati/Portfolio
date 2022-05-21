const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

// sticky navbar========================

const section_hero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    // console.log(ent);
    ent.isIntersecting === false
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    rootMargin: "-80px",
    threshold: 0,
  }
);

observer.observe(section_hero);
p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  // console.log(p_btn_clicked);

  p_btn.forEach((curElem) => {
    curElem.classList.remove("p-btn-active");
  });

  p_btn_clicked.classList.add("p-btn-active");

  const btn_num = p_btn_clicked.dataset.btnNum;

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-acitve"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-acitve")
  );
});

// number ====================================

const countNum = document.querySelectorAll(".counter-numbers");

const speed = 200;
countNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);

    const incNum = Math.trunc(targetNumber / speed);
    // console.log(incNum);
    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incNum}+`;
      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();
});

// swiper========================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    Delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// scroll=============================================

window.onscroll = function () {
  scrollfun();
};

const heroSection = document.querySelector(".section-hero");
const footElement = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scroll-top-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footElement.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};
scrollElement.addEventListener("click", scrollTop);

const st = document.querySelector(".scroll-top-style");

scrollfun = () => {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    scrollElement.style.display = "block";
  } else {
    scrollElement.style.display = "none";
  }
};
