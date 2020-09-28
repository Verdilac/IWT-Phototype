//getting the input elements to configure client side validation
const appnumber = document.getElementById("appNo");
const name = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const form = document.getElementById("rateForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
  display();
});

function display() {
  
  alert("submitted");
  
}
z
function validateInputs() {
  const applen = appNO.length;
  const nameval = name.value;
  const emailval = email.value;
  const commentval = comment.value;

  /* in each of these validation steps we are validating the input  
  and preventing submit on a invalid input */

  if (appNO.value.length === 0) {
    alert("error: Appointment number is empty ");
    e.preventDefault();
  }
  if (nameval === "") {
    alert("error: Name is empty");
    e.preventDefault();
  }

  if (emailval === "") {
    alert("error: Email adress is empty");
    e.preventDefault();
  }

  if (commentval === "") {
    alert("error: Your comment  empty");
    e.preventDefault();
  }
}
