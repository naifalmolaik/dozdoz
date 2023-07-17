// code links
let oulinks = document.querySelector(".oulins");
let munuetag = document.querySelector(".meg-menu");
oulinks.onclick = function () {
  munuetag.classList.toggle("bl");
};
document.addEventListener("click", function (e) {
  if (e.target !== oulinks && e.target !== munuetag) {
    if (munuetag.classList.contains(" meg-menu")) {
      munuetag.classList.toggle("bl");
    }
  }
});
