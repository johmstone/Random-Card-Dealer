/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const values = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let valuesLength = values.length;
  let ValueIndex = Math.floor(Math.random() * (valuesLength - 1));

  console.log(values[ValueIndex]);

  var vc = document.getElementById("valuecard");
  vc.innerHTML = values[ValueIndex];

  const palos = "♣♦♠♥";
  let palosLength = palos.length;
  let PaloIndex = Math.floor(Math.random() * palosLength);

  console.log(palos[PaloIndex]);

  var ph = document.getElementById("paloheader");
  var pf = document.getElementById("palofooter");
  ph.innerHTML = palos[PaloIndex];
  pf.innerHTML = palos[PaloIndex];

  var main = document.getElementById("card");

  if (palos[PaloIndex] == "♣" || palos[PaloIndex] == "♠") {
    main.style.color = "black";
  } else {
    main.style.color = "red";
  }
};
