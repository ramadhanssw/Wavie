import "regenerator-runtime";
import "./styles/style.css";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);

const ColorMode = document.getElementById("ColorMode");
ColorMode.onclick = function () {
  document.body.classList.toggle("darkmode");
};
