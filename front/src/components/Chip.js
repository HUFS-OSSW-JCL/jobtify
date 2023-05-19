import { useState } from "react";

const Chip = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const chipClickHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div onClick={chipClickHandler} className="mr-[10px]">
      {isChecked ? (
        <div className="w-max h-[45px] mt-[7px] hover: cursor-pointer border border-checked2 bg-checked flex flex-row justify-center items-center rounded-3xl transition-colors duration-300">
          <div className="w-[28px] h-[28px] ml-[10px] flex justify-center items-center rounded-full border border-checked2 transition-colors duration-300">
            <img className="rounded-full" src={props.pic} alt="jobkorea" />
          </div>
          <div className="w-max ml-[8px] mr-[12px] flex items-center justify-center">
            <p className="font-main text-[14px] font-bold text-black">
              {props.name}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-max h-[45px] mt-[7px] hover: cursor-pointer border border-gray-400 flex flex-row justify-start items-center bg-white rounded-3xl transition-colors duration-300">
          <div className="w-[28px] h-[28px] ml-[10px] flex justify-center items-center rounded-full border border-gray-300 transition-colors duration-300">
            <img className="rounded-full" src={props.pic} alt="jobkorea" />
          </div>
          <div className="w-max ml-[8px] mr-[12px] flex items-center justify-center">
            <p className="font-main text-[14px] font-bold text-black">
              {props.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chip;
