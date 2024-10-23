let output = document.getElementById("output")
let getal = 0

function countUp() {
    getal++
    output.innerText = getal
    if(getal == 10) {
        getal = -1
    }
}

console.log(getal)