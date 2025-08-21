let boxes = document.querySelectorAll(".box");
let p = document.querySelector(".winning");
let reset = document.querySelector(".reset");
let current = "X";


const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
const resetgame = () => {
    let current = "X";
    reset.innerText = "Reset Game";
    boxenable();
    p.classList.add("hide");
    p.innerText = "";
}
const boxenable = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const boxdisable = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const winner = (pat1) => {
    p.classList.remove("hide");
    p.innerText = `${pat1} is the Winner`;
    reset.innerText = "New Game";
    boxdisable();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (current === "X") {
            box.innerText = "X";
            current = "O";
        } else if (current === "O") {
            box.innerText = "O";
            current = "X";
        }
        box.disabled = true;
        check();
    });

});
const check = () => {
    for (pattern of winning) {

        let pat1 = boxes[pattern[0]].innerText;
        let pat2 = boxes[pattern[1]].innerText;
        let pat3 = boxes[pattern[2]].innerText;

        if (pat1 != "" && pat2 != "" && pat3 != "") {
            if (pat1 == pat2 && pat2 == pat3) {
                winner(pat1);

            }
        }
    }
};
reset.addEventListener("click", resetgame);