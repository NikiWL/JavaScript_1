let answer = document.getElementById("answer");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2")

function multiply(){
 let ans = num1.value * num2.value;
 answer.innerText = ans

}
function devide(){
 let ans = num1.value / num2.value;
 answer.innerText = ans

}
function add(){
 let ans = num1.value + num2.value;
 answer.innerText = ans

}
function minus(){
 let ans = num1.value - num2.value;
 answer.innerText = ans

}
