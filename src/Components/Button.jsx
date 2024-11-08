import { HashLink as Link } from "react-router-hash-link";

export const Button_White = ({ text, to, arrow }) => {
  return (
    <Link to={to}>
      <button className="px-[20px] py-[12px] -bg-white border-[1px] -border-border -text-black rounded-[8px] font-medium text-[15px] shadow-customShadow flex gap-[5px] items-center">
        {text} {arrow}
      </button>
    </Link>
  );
};

export const Button_Black = ({ text, to, arrow, onclick, className }) => {
  return (
    <Link to={to}>
      <button
        className={`px-[20px] py-[12px] -bg-black -text-white rounded-[8px] text-[15px] shadow-customShadow font-semibold flex gap-[5px] items-center hover:opacity-80 transition-all duration-300 ease-in-out ${className}`}
        onClick={onclick}
      >
        {text} {arrow}
      </button>
    </Link>
  );
};
export const Button_Tab = ({ text, to, arrow }) => {
  return (
    <Link to={to}>
      <button className="px-[20px] py-[12px] -bg-black -border-tabs w-fit border-[1px] -text-white rounded-[8px] font-medium text-[15px] shadow-customShadow flex gap-[5px] items-center]">
        {text} {arrow}
      </button>
    </Link>
  );
};
