// export const Menu = ({ handleMenu, isOpenMenu }) => {
//   return (
//     <div className={`absolute transition-all duration-500 ease-in-out ${isOpenMenu? "left-0":"left-[-100%]"} left-0 w-screen h-screen bg-slate-400 flex items-center justify-center flex-col gap-5`}>
//       <p>Menu garch irlee</p>
//       <button onClick={handleMenu}>Close</button>

//     </div>
//   );
// };

//Here are some JavaScript problems that focus on using the `Array.map()` function:

//javascript
// Problem 1: Square each number in an array
// Input: [1, 2, 3, 4, 5]
// Expected Output: [1, 4, 9, 16, 25]

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers);
