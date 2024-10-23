let getal = 0
let budget = 100
let product = prompt()
let hour = 22

let output = document.getElementById("output")

function addNumber(){
    output.innerText = getal
}

if (budget > product) {
    output.innerText = "Ik heb genoeg geld!"
  } else {
    output.innerHTML = "Ik heb niet genoeg geld"
  }

  if (hour < 12) {
    console.log("Good morning!")
  } else if (hour < 18) {
    console.log("Good evening!")
  } else if (hour < 23) {
    console.log("Goodnight!")
   } else {
    console.log("Have a nice day!")
   }
  

