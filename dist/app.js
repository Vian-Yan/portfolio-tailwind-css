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
    "https://media.giphy.com/media/UsOoz5EYqRxXW/giphy.gif?cid=ecf05e474ge7087mzoahthumqojajnvyx6aoqhlosla28ibn&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif?cid=ecf05e478nefp49wyuof3x51t4wrtplzaxaq8b7hzly8ktqz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/najmtazy4OiiI/giphy.gif?cid=ecf05e47rcq93xik56diwrthw8lghmrtrjsdcejyrjstwz05&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/KmlTchPoFQT84/giphy.gif?cid=ecf05e47se501g7hr9ajrrk6eb1ch86j1i3ggwf13pv4zew4&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/l41lR9cLxFqcJI4co/giphy.gif?cid=ecf05e47wkbbmt3djkw2ikadwub8mv4pu8ycyjg3cknidsbl&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/26FPyr3ZL3j1r3I2s/giphy.gif?cid=ecf05e47wkbbmt3djkw2ikadwub8mv4pu8ycyjg3cknidsbl&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/A05Zkc18G0tb2/giphy.gif?cid=ecf05e47xwrhsn14w21lhudgo7ycpi1b8rqlvftt7cssdpe9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/r00LEeXVOt0xG/giphy.gif?cid=ecf05e47s3kz2s3puoctwjvvgr1heys36tcqqptdomq6xpv5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/26FPLsoMq5cPEVgg8/giphy.gif?cid=ecf05e47ai0uzcf6o1z27b0dk9z1pa5ipvi4b95y3e010kam&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/xTiTnooneW4SYfch8Y/giphy.gif?cid=ecf05e47ai0uzcf6o1z27b0dk9z1pa5ipvi4b95y3e010kam&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/11StaZ9Lj74oCY/giphy.gif?cid=790b76112cehpqtc6e5lpto2y799df340qdzz54imjg82n57&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/lb95bHRxh1Ze0/giphy.gif?cid=790b76112cehpqtc6e5lpto2y799df340qdzz54imjg82n57&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/WgT0gKTJBdRWo/giphy.gif?cid=ecf05e47ge27zzju743e9eij1p9z8z7rijynraafz6ctfjxm&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/3o6Zt1TrXW8uW2lE2I/giphy.gif?cid=ecf05e47sdh80uwvnh0didzfh9hgk0viw8pzq4p13sz2jma4&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/xTcnSPG2Hw51P6Uhjy/giphy.gif?cid=ecf05e47dzhsdz8fq33oz5zixzefzf1g6pkve089qrvlwkn1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/xThuWb1WK3uy9JNlkI/giphy.gif?cid=ecf05e47dzhsdz8fq33oz5zixzefzf1g6pkve089qrvlwkn1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/lOgzjLU2mmN3VoUG4S/giphy.gif?cid=ecf05e47dzhsdz8fq33oz5zixzefzf1g6pkve089qrvlwkn1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/tXNMqUmtvyuIw/giphy.gif?cid=ecf05e47shrxk8nzem0govbywegi2yw95i8osegcfzbymswl&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  ];

  const random = Math.floor(Math.random() * gifs.length);
  const randomGif = gifs[random];
  document.querySelector("#gif-img").src = randomGif;
});

//nav fixed
// window.addEventListener("scroll", () => {
//   const isScrolled = window.scrollY > 0;
//   const navbar = document.querySelector("header");
//   const toTop = document.querySelector("#to-top");
//   if (isScrolled) {
//     navbar.classList.add("navbar-fixed");
//     toTop.classList.add("flex");
//     toTop.classList.remove("hidden");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//     toTop.classList.add("hidden");
//   }
// });

window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");
  const isScrolled = window.scrollY > 0;
  const toTop = document.querySelector("#to-top");
  navbar.classList.toggle("navbar-fixed", isScrolled);
  toTop.classList.toggle("flex", isScrolled);
  toTop.classList.toggle("hidden", !isScrolled);
});

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
});
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger

window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//dark mode

// const darkModeToggle = document.querySelector("#dark-toggle");
// const html = document.querySelector("html");

// darkModeToggle.addEventListener("change", () => {
//   // Menggunakan operator ternary untuk menambahkan atau menghapus kelas
//   darkModeToggle.checked
// ? html.classList.add("dark-gray")
//     : html.classList.remove("dark-gray");
// });

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.querySelector("#dark-toggle");
  const html = document.querySelector("html");
  const darkModeSistem = window.matchMedia("(prefers-color-scheme: dark)");

  // periksa mode gelap sistem
  if (darkModeSistem.matches) {
    html.classList.add("dark");
    darkModeToggle.checked = true;
    localStorage.setItem("darkMode", "enabled");
  }

  // Periksa preferensi mode gelap yang tersimpan
  if (localStorage.getItem("darkMode") === "enabled") {
    darkModeToggle.checked = true;
    html.classList.add("dark");
  }

  darkModeSistema.addEventListener("change", () => {
    if (darkModeSistem.matches) {
      html.classList.add("dark");
      darkModeToggle.checked = true;
      localStorage.setItem("darkMode", "enabled");
    } else {
      html.classList.remove("dark");
      darkModeToggle.checked = false;
      localStorage.setItem("darkMode", "disabled");
    }
  });
  darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
      html.classList.add("dark");

      localStorage.setItem("darkMode", "enabled");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
