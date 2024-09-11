// import { useState } from "react";

import CallbackPage from "@/components/pages/CallbackPage";
import { HomePage } from "./ArticleCardData";
import Callback from "./callback";
import UseEffectPage from "../components/pages/UseEffectPage";
import UseEffect from "./use-effect";
import Promise from "./promise";

// //hook
// //state uurchlugdvul render hiine
// //props uurchlugdvul render hiine

// export default function Home() {
//   const [number, setNumber] = useState(0);
//   const [name, setName] = useState("Dashka");
//   const [color, setColor] = useState("");

//   const changeNumber = () => {
//     setNumber(number + 1);
//   };
//   const minusNumber = () => {
//     setNumber(number - 1);
//   };
//   const changeName = () => {
//     setName("Zol Zen");
//   };

//   // const changeColor = (event) => {
//   //   setColor(event.target.value);
//   // };

//   const randomColor = () => {
//     setColor(`#${Math.floor(100000 + Math.random() * 900000)}`);
//   };

//   return (
//     <div
//       style={{ backgroundColor: color }}
//       className="flex flex-col items-center w-full"
//     >
//       {/* <input onChange={changeColor} type="color" name="" id="" /> */}
//       <button onClick={changeNumber}>Plus number</button>
//       <button onClick={minusNumber}>Minus number</button>
//       <h1>{number}</h1>
//       <button onClick={changeName}>Change name</button>
//       <h1>{name}</h1>
//       <button onClick={randomColor}>random</button>
//     </div>
//   );
// }

// import { Menu } from "@/components/Menu";
// import { useState } from "react";

// export default function Home() {
//   const [isOpenMenu, setIsOpenMenu] = useState(false);

//   const handleMenu = () => {
//     setIsOpenMenu(!isOpenMenu);
//   };

//   return (
//     <div className="h-[200vh]">
//       <div className=" flex justify-center items-center w-screen h-screen bg-red-400">
//       <button onClick={handleMenu}>Menu</button>

//       <Menu handleMenu={handleMenu} isOpenMenu={isOpenMenu} />
//     </div>
//     </div>
//   );
// }

// export default function Home() {

// const people = [
//   "Dashka",
//   "Baldan",
//   "Dulmaa",
//   "Tsetseg",
//   "Ganjuu",
//   "Buynaa",
//   "Dashka",
// ];

// const filteredArray = people.filter((person) => person === "Dashka");

//Garaar hiisen map function
// const diyMap = (array) => {
//   const elements = [];
//   for (let i = 0; i < array.length; i++) {
//     elements.push(<div className="bg-red-400">{array[i]}</div>);
//   }
//   return elements;
// };
//Garaar hiisen filter function
// const diyFilter = (array) => {
//   const elements = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "Dashka") {
//       elements.push(array[i]);
//     }
//   }
//   return elements;
// };

//Original map function
// const elements = people.map((person, index) => {
//   return (
//     <div key={person + index} className="bg-slate-600">
//       {person}
//     </div>
//   );
// });

// return (
//   <div name="da" className="flex gap-2">
//     {/* {elements} */}
//   </div>
// );

//Declaritve, Imprative => bichigleliin nershil
//Hoisting => function bichichlelees hamaaraas haana duudaj boloh eseh
//Function => Param, declaration
//Complexity => 1 function 1 l zorilgotoi baival tun sain
//Array.map
//Array.filter

//Here are some JavaScript problems that focus on using the `Array.map()` function:

//javascript
// Problem 1: Square each number in an array
// Input: [1, 2, 3, 4, 5]
// Expected Output: [1, 4, 9, 16, 25]

// {
//   const numbers = [1, 2, 3, 4, 5];
//   const squaredNumbers = numbers.map((number) => number * number);
//   console.log(squaredNumbers);
// }

// // Problem 2: Convert an array of Fahrenheit temperatures to Celsius
// // Input: [32, 68, 86, 104, 212]
// // Expected Output: [0, 20, 30, 40, 100]

// {
//   const fahrenheit = [32, 68, 86, 104, 212];
//   const celsius = fahrenheit.map((number) => ((number - 32) / 9) * 5);
//   console.log(celsius);
// }

// Problem 3: Extract the length of each word in a sentence
// Input: ['Hello', 'world', 'how', 'are', 'you']
// Expected Output: [5, 5, 3, 3, 3]
// {
//   const words = ["Hello", "world", "how", "are", "you"];
//   const wordLengths = words.map((word) => word.length);
//   console.log(wordLengths);
// }

// Problem 4: Create an array of objects with person names and their name lengths
// Input: ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
// Expected Output: [
//   { name: 'Alice', length: 5 },
//   { name: 'Bob', length: 3 },
//   { name: 'Charlie', length: 7 },
//   { name: 'David', length: 5 },
//   { name: 'Eve', length: 3 }
// ]
// {
//   const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
//   const nameObjects = names.map((name) => ({
//     name: name,
//     length: name.length,
//   }));
//   console.log(nameObjects);
// }

// // Problem 5: Double even numbers and leave odd numbers as is
// // Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // Expected Output: [1, 4, 3, 8, 5, 12, 7, 16, 9, 20]
// {
//   const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const processedNumbers = mixedNumbers.map((number) =>
//     number % 2 === 0 ? number * 2 : number
//   );
//   console.log(processedNumbers);
// }

//   return (
//     <div>
//       <UseEffectPage />
//       <HomePage />
//     </div>
//   );
// }

export default function Home() {
  return (
    <div>
      <Callback />
      <Promise />
      <UseEffect />
    </div>
  );
}
