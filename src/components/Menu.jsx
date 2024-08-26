export const Menu = ({ handleMenu, isOpenMenu }) => {
  return (
    <div className={`absolute transition-all duration-500 ease-in-out ${isOpenMenu? "left-0":"left-[-100%]"} left-0 w-screen h-screen bg-slate-400 flex items-center justify-center flex-col gap-5`}>
      <p>Menu garch irlee</p>
      <button onClick={handleMenu}>Close</button>
    
    </div>
  );
};
