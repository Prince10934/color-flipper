const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.getElementById("color");
const main = document.getElementById("main");
const btn = document.getElementById("btn");
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
btn.addEventListener("click", () => {
  let str = "#";
  for (let i = 0; i < 6; i++) {
    str += colors[getRandomNumber()];
  }
  color.innerText = str;
  main.style.backgroundColor = str;
});
