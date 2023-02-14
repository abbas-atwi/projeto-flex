let menuClick = document.querySelector(".menu-burguer");
menuClick.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  menu.style.marginRight = "250px";
  setInterval(() => {
    menu.style.marginRight = "680px";
  }, 2000);
});

let randomBanner = document.querySelector(".section-banner--body");
randomBanner = ["-100vw", "-200vw", "-300vw"];

for (let i = 0; i <= randomBanner.lenght; i++) {
  console.log(randomBanner[i]);
}
