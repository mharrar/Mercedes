let name = "mehdi";
let a = "meo";
let b = 5;
let s = a + b;
let x = true;
let y = false;
let xo = 5.7;

function saluer(nom) {
  console.log("Bonjour, " + nom + " !");
}
saluer("Alice"); // "Bonjour, Alice !"

function addition(a, b) {
  return a + b;
}
function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(4));
let div = document.getElementsByTagName("div");
console.log(div);
function add() {
  let titre = document.querySelector("div");
  titre.textContent = "je le pense";
}
let i = 4;
function addli() {
  let m = document.getElementById("pom");
  let m1 = document.createElement("li");
  m1.textContent = `p ${i}`;
  m.appendChild(m1);
  i++;
}
