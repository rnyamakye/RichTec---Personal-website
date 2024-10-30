export const Button_White = ({ text }) => {
  return (
    <button className="px-[20px] py-[12px] -bg-white border-[1px] -border-border -text-black rounded-[8px] font-medium text-[15px] shadow-customShadow">
      {text}
    </button>
  );
};

export const Button_Black = ({ text }) => {
  return (
    <button className="px-[20px] py-[12px] -bg-black -text-white rounded-[8px] text-[15px] shadow-customShadow font-semibold">
      {text}
    </button>
  );
};
export const Button_Tab = ({ text }) => {
  return (
    <button className="px-[20px] py-[12px] -bg-black -border-tabs w-fit border-[1px] -text-white rounded-[8px] font-medium text-[15px] shadow-customShadow">
      {text}
    </button>
  );
};
