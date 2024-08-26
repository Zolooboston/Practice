// import { useState } from "react";

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

import { Menu } from "@/components/Menu";
import { useState } from "react";

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className=" flex justify-center items-center w-screen h-screen bg-red-400">
      <button onClick={handleMenu}>Menu</button>

      <Menu handleMenu={handleMenu} isOpenMenu={isOpenMenu} /> 
    </div>
  );
}
