let textarea = document.getElementById("textarea");
let total_counter = document.getElementById("total-counter");
let remaining_counter = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", () =>{
    update();
})

function update(){
    let x = textarea.value.length;
    total_counter.innerText = x;
    let temp = 50 - x;
    remaining_counter.innerText = temp;
}