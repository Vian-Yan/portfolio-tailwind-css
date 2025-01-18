// gif random
document.addEventListener("DOMContentLoaded", () => {
  const gifs = [
    "https://media.giphy.com/media/3o6ozoD2BgEK8KNtfi/giphy.gif?cid=790b7611avnkc0t10d7gh2zmbh73ozjfeqcedpe76szz4gm1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/EXHHMS9caoxAA/giphy.gif?cid=790b7611avnkc0t10d7gh2zmbh73ozjfeqcedpe76szz4gm1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/NQL7Wuo2JSQSY/giphy.gif?cid=790b7611avnkc0t10d7gh2zmbh73ozjfeqcedpe76szz4gm1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/AAnIjZPUhrUM8/giphy.gif?cid=790b7611avnkc0t10d7gh2zmbh73ozjfeqcedpe76szz4gm1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/GbIHIHhkgfpAs/giphy.gif?cid=790b7611avnkc0t10d7gh2zmbh73ozjfeqcedpe76szz4gm1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/xYRvkBcJhbSr6/giphy.gif?cid=790b76119wvwpd5oiqcy1vb1j8fl6fqdauvuiixprwm0on2j&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/YkNTiZHk51dfy/giphy.gif?cid=ecf05e476zo8nzrz07d42cj0kd5shbz30giw43mbemmhefdx&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/xTgeIZBUFx7V5H17O0/giphy.gif?cid=ecf05e47xcedsq1d41rcy1c6mk6ebp6m1dniiird3bk781ez&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/UXSB8HYbpLQNq/giphy.gif?cid=ecf05e47blydfmjbwd9jvp9w3rfltwgqmk332kh4ow42xwe8&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  ];

  const random = Math.floor(Math.random() * gifs.length);
  const randomGif = gifs[random];
  document.querySelector("#gif-img").src = randomGif;
});

//nav fixed
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("navbar-fixed", window.scrollY > 0);
});

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  console.log("hamburger");
});
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});
