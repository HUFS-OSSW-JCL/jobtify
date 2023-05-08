import { BsFilterCircle } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";

const Header = () => {
  return (
    <div className="container max-w-[390px] mx-auto flex flex-row items-center justify-start">
      <h1 className="font-main text-black text-[32px] font-bold ml-[22px]">
        Jobtify
      </h1>
      <button className="bg-white w-[44px] h-[44px] ml-[140px] border-none rounded-lg flex items-center justify-center">
        <BsFilterCircle size="1.4em" />
      </button>
      <button className="bg-white w-[44px] h-[44px] ml-[18px] border-none rounded-lg flex items-center justify-center">
        <GrAddCircle size="1.4em" />
      </button>
    </div>
  );
};

export default Header;
