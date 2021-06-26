const colors = [
  "red",
  "blue",
  "rgba(120,120,120,0.5)",
  "#9e9e9e",
  "hsl(180,100%,75%)",
  "rgb(180,180,0)",
];
const color = document.getElementById("color");
const main = document.getElementById("main");
const btn = document.getElementById("btn");
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
btn.addEventListener("click", () => {
  const rColor = colors[getRandomNumber()];
  main.style.backgroundColor = rColor;
  color.innerText = rColor;
});
