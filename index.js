let display = document.getElementById("input-box");
let Buttons = document.querySelectorAll(".btn");
let equalButton = document.querySelector(".equal");
let buttonDE = document.querySelector(".btn1");

Buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    var v = e.target.value;
    var oldValue = display.value;

    var t = oldValue.length;

    var lastChar = oldValue[t - 1];

    var oprSym = ["+", "-", "*", "/", "."];

    if (oprSym.includes(v)) {
      if (oprSym.includes(lastChar)) {
        var removelastValue = oldValue.slice(0, -1);
        display.value = removelastValue + v;
        console.log(removelastValue);
      } else {
        display.value = oldValue + v;
      }
    } else {
      display.value = oldValue + v;
    }

    if (e.target.value == "AC") {
      return (display.value = " ");
    } else if (e.target.value == " = ") {
      return;
    }
  });
});

equalButton.addEventListener("click", function (e) {
  if (display.value == "") {
    return alert("enter value");
  }

  display.value = eval(display.value);
});

buttonDE.addEventListener("click", function () {
  display.value = display.value.toString().slice(0, -1);
});
