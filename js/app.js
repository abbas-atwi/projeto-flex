let menuClick = document.querySelector(".menu-burguer");
menuClick.addEventListener("click", () => {
  if ((document.querySelector(".menu").style.marginRight = "680px")) {
    document.querySelector(".menu").style.marginRight = "250px";
  } else {
    document.querySelector(".menu").style.marginRight = "680px";
  }
});
