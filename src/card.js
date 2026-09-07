let nextId = 0;
export const languageCards = [
  {
    id: nextId++,
    name: "javascript",
    src: "/src/Img/JavaScript.png",

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "python",
    src: "/src/Img/Python.png",

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "c++",
    src: "/src/Img/C_plus.png",

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "java",
    src: "/src/Img/Java.png",

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "react",
    src: "/src/Img/React.png",

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "assembly",
    src: "/src/Img/Assembly.png",

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "typescript",
    src: "/src/Img/Typescript.png",

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "nodejs",
    src: "/src/Img/Nodejs.png",

    visible: false,
    twin: "no",
  },
  {
    id: nextId++,
    name: "mysql",
    src: "/src/Img/MySQL.png",

    visible: false,
    twin: "no",
  },
];
const twinLanguageCards = [
  {
    id: nextId++,
    name: "twinjavascript",
    src: "/src/Img/JavaScript.png",

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinpython",
    src: "/src/Img/Python.png",

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinc++",
    src: "/src/Img/C_plus.png",

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinjava",
    src: "/src/Img/Java.png",

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinreact",
    src: "/src/Img/React.png",

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinassembly",
    src: "/src/Img/Assembly.png",

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twintypescript",
    src: "/src/Img/Typescript.png",

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinnodejs",
    src: "/src/Img/Nodejs.png",

    visible: false,
    twin: "yes",
  },
  {
    id: nextId++,
    name: "twinmysql",
    src: "/src/Img/MySQL.png",

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
