/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let randomNumber;

window.onload = () => {
  randomNumber = generateRandomNumber();
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!" + generateExcuse());
};

let generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

let generateExcuse = () => {
  let pronouns = ["A", "the", "he", "she", "they", "it"];
  let subject = [
    "jogger",
    "raccoon",
    "dog",
    "driver",
    "mom",
    "brother",
    "uncle",
    "cousin"
  ];
  let action = [
    "took my",
    "threw my",
    "yelled at my",
    "stole my",
    "bit my",
    "made me",
    "told me to"
  ];
  let possession = [
    "down the street",
    "in my room",
    "on the roof of my house",
    "in my car",
    "toward the yard",
    "down the drain"
  ];

  let where = ["homework", "toe", "car", "shoe", "flower", "remote", "phone"];

  let pronounIndex = Math.floor(Math.random() * pronouns.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronouns[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex] +
    " "
  );
};
