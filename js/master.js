
let togglebtn = document.querySelector("nav i");
let tlinks = document.querySelector(".menu");
// console.log(tlinks);
togglebtn.onclick = function (e) {
    this.classList.toggle("op"); // toggle == to add or remove class to button
};
// //click anywhere outside menu and button
document.addEventListener("click", (e) => {
  if (e.target !== togglebtn && e.target !== tlinks) {
      togglebtn.classList.toggle("op"); // to remove class from button
    
  }
});