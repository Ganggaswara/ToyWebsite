//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika topup menu di klik
document.querySelector("#topup-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar sidebar untuk menghilangkan nav
const topup = document.querySelector("#topup-menu");

document.addEventListener("click", function (e) {
  if (!topup.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
