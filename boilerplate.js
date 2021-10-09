function sayHello() {
    alert("Hello, World")
}

document.getElementById('show').addEventListener('click', changeColor);

function changeColor() {
    body.style.backgroundColor = "white";
    return false;
}