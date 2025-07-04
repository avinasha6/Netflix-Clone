const show = document.querySelector(".freqbox");
const show1 = document.querySelector(".freqbox1");

show.addEventListener("click", function () {
    
  if (show1.style.display === "none" || show1.style.display === "") {
    show1.style.display = "block";
  } else {
    show1.style.display = "none";
  }
});
