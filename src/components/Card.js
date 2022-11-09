import html from "../images/html.svg";
import css from "../images/css3.svg";
import tailwind from "../images/tailwind.svg";
import js from "../images/javascript.svg";
import react from "../images/reactjs.svg";
import angular from "../images/angular.svg";
import vue from "../images/vuejs.svg";
import nodejs from "../images/nodejs.svg";
import git from "../images/git.svg";
import github from "../images/github.svg";

const tech = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React JS",
  "Angular",
  "Vue JS",
  "Node JS",
  "Git",
  "GitHub",
];

const imgURL = [
  html,
  css,
  tailwind,
  js,
  react,
  angular,
  vue,
  nodejs,
  git,
  github,
];

function Card({ index }) {
  return (
    <div className="card">
      <img src={imgURL[index]} alt={tech[index]} />
      <p>{tech[index]}</p>
    </div>
  );
}

export default Card;
