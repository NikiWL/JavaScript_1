let getal = 0
let budget = 100
let product = 60
let hour = 22

let output = document.getElementById("output")

function addNumber(){
    output.innerText = getal
}

if (budget > product) {
    console.log("You got enough money!")
  } else {
    console.log("You don't got enough money")
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
  

