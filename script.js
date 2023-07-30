$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 200);
});

const aboutElement = document.querySelector(".about");

window.addEventListener("scroll", function () {
  // Tambahkan event listener untuk mendeteksi saat scroll

  if (window.scrollY > 600) {
    // Jika pengguna melakukan scroll, tambahkan kelas "scrolled" pada elemen dengan kelas "about"
    aboutElement.classList.add("scrolled");
  } else {
    // Jika scroll kembali ke atas, hapus kelas "scrolled" dari elemen dengan kelas "about"
    aboutElement.classList.remove("scrolled"); // Jika scroll kembali ke atas, hapus kelas "scrolled" dari elemen dengan kelas "about"
  }
});
