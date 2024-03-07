let enterButton = document.querySelector(".Enter-one");
let result = document.querySelector(".result");
let counterdiv = document.querySelector(".counter");
let counter = 0;

enterButton.onclick = function() {
  let age = document.querySelector(".one").value;
  let gender = document.querySelector(".two").value;
  counter = counter + 1
  counterdiv.innerHTML = "this quiz has been taken " + counter + "times";
  console.log(age);
  console.log(gender);

  if (age >= 15 && gender === "Boy") {
    result.innerHTML = "you are queso fresco"
  } else if (age <= 15 && gender === "Boy ") {
    result.innerHTML = "you are mozzarella";
  } else if (age >= 15 && gender === "Girl") {
    result.innerHTML = "you are parmesan  cheese";
  }
  if {
    result.innerHTML = "you are cheddar cheese";
  }
};