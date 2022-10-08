const parent = document.querySelectorAll(".container");
const child = document.querySelectorAll(".text");


parent.forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        const text = e.target.children;
        text[1].style.color = "black";
    });
    item.addEventListener("mouseleave", (e) => {
        const text = e.target.children;
        setTimeout(() => {
            text[1].style.color = "white";
        }, 100);
    });
});