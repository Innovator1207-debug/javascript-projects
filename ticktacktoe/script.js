let button = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let turnx = true;
let count = 0;
const winpat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const check = () => {
    for(let pat of winpat){
        let pos1 = button[pat[0]].innerText;
        let pos2 = button[pat[1]].innerText;
        let pos3 = button[pat[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                alert(`Winner is ${pos1}`);
                reset();
                return;
            }
        }
    }
    if(count == 9){
    alert(`Game is draw!`);
}
};
const reset = () => {
    button.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("x-turn", "o-turn");
    });
    count = 0;
};
button.forEach((box) =>{
box.addEventListener("click", () => {
    if(turnx){
        box.textContent= "X";
        turnx = false;
        box.classList.add("x-turn");
    }
    else{
        box.textContent= "O";
        turnx = true;
        box.classList.add("o-turn");
    }
    count++;
    box.disabled = true;
    setTimeout(check, 100);
});
});
resetbtn.addEventListener("click", reset);