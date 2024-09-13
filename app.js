let btns = document.querySelectorAll("button");
let btn1 = document.querySelector(".btn1");
btns.forEach(btn => {
    function changeColor() {
        btn.style.color = "blue";
    }
    function lineThrough() {
        btn.style.textDecoration = "line-through";
        btn1.removeEventListener("click", changeColor);
    }
    btn.addEventListener("click", lineThrough)
    btn.addEventListener("click", changeColor)
})