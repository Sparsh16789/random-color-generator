let boxes = document.querySelector(".container").children
function randomnumber(){
    let num1 = Math.ceil(0 + Math.random()* 255); // formula for generating random number between a and b - a + math.random()* (b-a)
    let num2 = Math.ceil(0 + Math.random()* 255);
    let num3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${num1}, ${num2}, ${num3})`
}
Array.from(boxes).forEach(e=>{ 
   e.style.backgroundColor=randomnumber()
   e.style.color=randomnumber()
})