const button = document.getElementById("button")
const label = document.getElementById("label")
const max = 6
const min = 1
let num;

button.onclick=function(){
    label.textContent=Math.floor(Math.random()*max + 1)
}

