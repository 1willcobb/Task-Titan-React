// Get the modal
var modal = document.getElementById("myModal");
// Get the modal
var modal2 = document.getElementById("myModal2");


// Get the button that opens the modal2
var btn2 = document.getElementById("myBtn2");

// When the user clicks on the button, open the modal2
btn2.addEventListener("click", function(event) {
  event.preventDefault();
  modal2.style.display = "block";
});

// Get the <span> element that closes modals
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), closes modals
span.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "none";
  modal2.style.display = "none";
});



// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// When the user clicks on the button, open the modal
btn.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "block";
});

