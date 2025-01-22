// random kata muda < 21
const randomAgeYoung = [
  "Muda tapi sudah punya banyak alasan untuk tidak melakukan apa-apa.",
  "Kamu masih belajar, tapi sudah mahir dalam membuat kesalahan.",
  "Umurmu masih muda, tapi sudah memiliki wawasan yang terlihat seperti sudah mengalami banyak hal dalam hidup.",
  "Kamu masih di usia yang baik, tapi sudah memiliki kebiasaan yang buruk seperti orang tua.",
  "Muda, tapi sudah kehabisan ide.",
  "Kamu masih muda, tapi sudah memiliki rambut yang membatu.",
  "Tua dalam kesalahan, muda dalam pengalaman.",
  "Kamu masih muda, tapi sudah memiliki kuping yang tidak mendengar.",
  "Pengalamanmu masih sedikit, tapi egoismu sudah besar.",
  "Muda, tapi sudah terlalu percaya diri.",
  "Kamu masih muda, tapi sudah memiliki mulut yang tajam.",
  "Belum dewasa, tapi sudah berpikir dewasa.",
  "Muda, tapi sudah memiliki hati yang keras.",
  "Kamu masih muda, tapi sudah memiliki pandangan yang sempit.",
  "Tua dalam pikiran, muda dalam tindakan.",
  "Muda, tapi sudah kehilangan arah.",
  "Kamu masih muda, tapi sudah memiliki kebiasaan buruk.",
  "Muda, tapi sudah terlalu ambisius.",
  "Kamu masih muda, tapi sudah memiliki masalah dewasa.",
  "Muda, tapi sudah kehabisan impian.",
  "Kamu masih muda, tapi sudah berpikir tua.",
];

//  Untuk Dewasa
const randomAgeAdult = [
  "Pengalamanmu sudah banyak, tapi masih belum bisa menghindari kesalahan muda.",
  "Umurmu sudah dewasa, tapi masih memiliki semangat muda yang salah arah.",
  "Kamu sudah dewasa, tapi masih belum bisa mengendalikan emosi.",
  "Pengalaman hidupmu sudah panjang, tapi masih belum bisa membuat keputusan tepat.",
  "Kamu sudah tua, tapi masih memiliki pikiran muda dan salah.",
  "Tua dalam umur, muda dalam semangat.",
  "Kamu sudah dewasa, tapi masih belum bisa melepaskan kebiasaan buruk.",
  "Pengalamanmu sudah luas, tapi masih belum bisa mengerti orang lain.",
  "Dewasa, tapi masih egois.",
  "Kamu sudah tua, tapi masih memiliki hati muda.",
  "Pengalamanmu sudah banyak, tapi masih belum bisa mengajarkan kesabaran.",
  "Umurmu sudah dewasa, tapi masih memiliki pikiran anak-anak.",
  "Kamu sudah dewasa, tapi masih belum bisa mengendalikan kata-kata.",
  "Pengalaman hidupmu sudah panjang, tapi masih belum bisa membuatmu bijak.",
  "Kamu sudah tua, tapi masih memiliki semangat muda.",
  "Dewasa, tapi masih belum dewasa.",
  "Kamu sudah dewasa, tapi masih belum bisa melepaskan masa lalu.",
  "Pengalamanmu sudah luas, tapi masih belum bisa mengerti diri sendiri.",
  "Umurmu sudah dewasa, tapi masih memiliki kebiasaan buruk.",
  "Kamu sudah tua, tapi masih memiliki impian muda.",
  "Kamu sudah dewasa, tapi masih belum bisa menghargai waktu.",
];

const randomMessages = [
  "Harusnya belajar dulu, baru main-main.",
  "Udah coba pake otak belom?",
  "Ini calculator apa, petak umpet?",
  "Coba cek lagi, jangan asal input.",
  "Waduh, ini jawabannya dari mana?",
  "Kayaknya angka kamu hilang deh.",
  "Ini angka atau huruf? Bingung deh.",
  "Aduh, ini input atau prank?",
  "Baca dulu, baru coba lagi.",
  "Kalau bisa, kasih yang bener dong.",
  "Yakin ini angka? Bisa jadi kucing juga.",
  "Masa gitu aja nggak ngerti?",
  "Ini serius apa bercanda sih?",
  "Inputnya ngaco deh, benerin dulu.",
  "Bukan tugasnya Google, kamu yang salah.",
  "Boleh nggak sih, sekali aja input yang bener?",
  "Ini angka apa dongeng sih?",
  "Kenapa nggak coba pake angka aja?",
  "Coba fokus sedikit, biar nggak kayak gini.",
  "Anda mencoba memberi saya alfabet?",
  "Masukkan angka, bukan puisi.",
  "Tolong, angka. Ini bukan soal esai.",
  "Saya butuh angka, bukan ramalan bintang.",
  "Ini bukan teka-teki silang, masukkan angka.",
  "Ini bukan permainan scrabble, angka saja.",
  "Mungkin kali ini coba masukkan angka.",
  "Tolong, angka. Saya bukan mesin pembaca puisi.",
  "Ingat, ini angka, bukan cerita pendek.",
  "Ini bukan game tebak kata, masukkan angka",
];

//ambil umur dari input
function getAgeInput() {
  return document.getElementById("umur").value;
}

function calculateAge() {
  const inputAge = getAgeInput();
  const yearNow = new Date().getFullYear();
  const result = yearNow - inputAge;
  return result;
}
function resultAge() {
  const age = calculateAge();
  const randomAgeYoungArray =
    randomAgeYoung[Math.floor(Math.random() * randomAgeYoung.length)];

  const randomAgeAdultArray =
    randomAgeAdult[Math.floor(Math.random() * randomAgeAdult.length)];

  const randomMessagesArray =
    randomMessages[Math.floor(Math.random() * randomMessages.length)];

  const getResult = document.getElementById("hasil");
  if (isNaN(age)) {
    getResult.textContent = ` ${randomMessagesArray}`;
  } else if (age < 21) {
    getResult.textContent = `Umur :  ${age}, ${randomAgeYoungArray} `;
  } else {
    getResult.textContent = `Umur :  ${age}, ${randomAgeAdultArray} `;
  }
}

function deletResults() {
  const results = document.getElementById("hasil");
  const ageInput = document.getElementById("umur");

  results.textContent = ""; // Menghapus semua teks dalam elemen dengan id "hasil"
  ageInput.value = ""; // Mengosongkan nilai dari input dengan id "umur"
}
//random kata tua > 21

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

  const random = gifs[Math.floor(Math.random() * gifs.length)];
  // const randomGif = gifs[random];
  document.querySelector("#gif-img").src = random;
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

// document.addEventListener("DOMContentLoaded", function () {
//   const darkModeToggle = document.querySelector("#dark-toggle");
//   const html = document.querySelector("html");
//   const darkModeSistem = window.matchMedia("(prefers-color-scheme: dark)");
//   // Periksa preferensi pengguna di localStorage
//   const savedDarkMode = localStorage.getItem("darkMode");

//   //periksa mode gelap sistem

//   //Pantau perubahan mode sistem

//   //Periksa preferensi mode gelap yang tersimpan
//   if (savedDarkMode === "enabled") {
//     html.classList.add("dark");
//     darkModeToggle.checked = true;
//   } else if (savedDarkMode === "disabled") {
//     html.classList.remove("dark");
//     darkModeToggle.checked = false;
//   } else if (darkModeSistem.matches) {
//     html.classList.add("dark");
//     darkModeToggle.checked = true;
//   }

//   darkModeSistem.addEventListener("change", () => {
//     if (!savedDarkMode) {
//       if (darkModeSistem.matches) {
//         html.classList.add("dark");
//       } else {
//         html.classList.remove("dark");
//       }
//     }
//   });

//   darkModeToggle.addEventListener("change", () => {
//     if (darkModeToggle.checked) {
//       html.classList.add("dark");
//       localStorage.setItem("darkMode", "enabled");
//     } else {
//       html.classList.remove("dark");
//       localStorage.setItem("darkMode", "disabled");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.querySelector("#dark-toggle");
  const html = document.querySelector("html");
  const darkModeSistem = window.matchMedia("(prefers-color-scheme: dark)");

  // Periksa preferensi pengguna di localStorage
  const savedDarkMode = localStorage.getItem("darkMode");
  // Kode ini: Fokus pada pengguna lama,
  // memprioritaskan pilihan mereka sebelumnya.
  if (savedDarkMode === "enabled") {
    html.classList.add("dark");
    darkModeToggle.checked = true;
  } else if (savedDarkMode === "disabled") {
    html.classList.remove("dark");
    darkModeToggle.checked = false;
  } else if (darkModeSistem.matches) {
    // Jika tidak ada preferensi tersimpan, gunakan mode sistem
    html.classList.add("dark");
    darkModeToggle.checked = true;
  }

  //Kode ini: Fokus pada pengguna baru,
  //  mengikuti mode sistem sebagai default sampai ada preferensi tersimpan.
  darkModeSistem.addEventListener("change", () => {
    if (!savedDarkMode) {
      if (darkModeSistem.matches) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  });

  // Ubah mode sesuai pilihan pengguna
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

//Ubah mode sesuai pilihan pengguna
