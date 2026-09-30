import assembly from "./Img/Assembly.png";
import cPlus from "./Img/C_plus.png";
import java from "./Img/Java.png";
import javascript from "./Img/JavaScript.png";
import nodejs from "./Img/Nodejs.png";
import mySQL from "./Img/MySQL.png";
import python from "./Img/Python.png";
import react from "./Img/React.png";
import typescript from "./Img/Typescript.png";

let nextId = 0;
export const languageCards = [
  {
    id: nextId++,
    name: "javascript",
    src: javascript,

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "python",
    src: python,

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "c++",
    src: cPlus,

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "java",
    src: java,

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "react",
    src: react,

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "assembly",
    src: assembly,

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "typescript",
    src: typescript,

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "nodejs",
    src: nodejs,

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "mysql",
    src: mySQL,

    visible: false,
    twin: "no",
  },
];
const twinLanguageCards = [
  {
    id: nextId++,
    name: "twinjavascript",
    src: javascript,

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinpython",
    src: python,

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinc++",
    src: cPlus,

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinjava",
    src: java,

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinreact",
    src: react,

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinassembly",
    src: assembly,

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twintypescript",
    src: typescript,

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinnodejs",
    src: nodejs,

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinmysql",
    src: mySQL,

    visible: false,
    twin: "yes",
  },
];

export function getRandomCards() {
  let arr = [...languageCards];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const randomNum = Math.floor(Math.random() * 12);
    if (languageCards[i].id < randomNum) {
      newArr.push(languageCards[i]);
    } else {
      newArr.unshift(languageCards[i]);
    }
  }
  for (let i = 0; i < twinLanguageCards.length; i++) {
    const randomNum = Math.ceil(Math.random() * 20);
    if (twinLanguageCards[i].id < randomNum) {
      newArr.push(twinLanguageCards[i]);
    } else {
      newArr.unshift(twinLanguageCards[i]);
    }
  }
  return newArr;
}
