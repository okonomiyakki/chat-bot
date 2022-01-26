document.getElementById("btn").addEventListener("click", btn);
let number = document.getElementsByClassName("number");
let name = document.getElementsByClassName("name");

function btn() {
    setTimeout(prog, 2000);
}

function prog() {
    number[0].innerHTML = "010-1234-5678";
    name[0].innerHTML = "단무지";

}