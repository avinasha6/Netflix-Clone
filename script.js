// const show = document.querySelector(".freqbox");
// const show1 = document.querySelector(".freqbox1");

// show.addEventListener("click", function () {
    
//   if (show1.style.display === "none" || show1.style.display === "") {
//     show1.style.display = "block";
//   } else {
//     show1.style.display = "none";
//   }
// });


const buttons = document.querySelectorAll(".freqbox");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});




