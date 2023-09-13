const button = document.getElementById("button1");
const loading = document.querySelector("#button1 div")

button.addEventListener("click", aaa);

function aaa() {
   loading.classList.toggle("loading")
}