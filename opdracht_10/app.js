let answer = document.getElementById("answer");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2")

function multiply(){
    if(num1.value > 0 && num2.value > 0){
        let ans = num1.value * num2.value;
        answer.innerText = ans
    }else {
        answer.innerText = "het getal moet hoger zijn dan 0"
    }
 

}
function devide(){
    if(num1.value > 0 && num2.value > 0){
        let ans = num1.value / num2.value;
        answer.innerText = ans
    }else {
        answer.innerText = "het getal moet hoger zijn dan 0"
    }
}


function add(){
 if(num1.value > 0 && num2.value > 0){
        let ans = Number(num1.value) + Number(num2.value)
        answer.innerText = ans
    }else {
        answer.innerText = "het getal moet hoger zijn dan 0"
    }
}


function minus(){
 if(num1.value > 0 && num2.value > 0){
        let ans = num1.value - num2.value;
        answer.innerText = ans
    }else {
        answer.innerText = "het getal moet hoger zijn dan 0"
    }
}
