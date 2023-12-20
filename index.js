
let display = document.getElementById("input-box");
let Buttons = document.querySelectorAll(".btn");
let equalButton = document.querySelector(".equal");
let buttonDE = document.querySelector(".btn1");

Buttons.forEach((button)=>{
    button.addEventListener("click",function(e){

        if (e.target.value == "AC") {
             return display.value = " ";
        }
       
        else if(e.target.value == " = "){
            return;

        }
       
        display.value += e.target.value;
    })
})

equalButton.addEventListener("click" ,function(e){
    if(display.value == ""){
        return alert("enter value")
    }

    display.value = eval(display.value)
})

buttonDE.addEventListener("click", function(){

    display.value = display.value.toString().slice(0,-1)
})

