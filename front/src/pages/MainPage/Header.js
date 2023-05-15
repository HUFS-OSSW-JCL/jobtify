import { BsFilterCircle } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container bg-light-blue w-[395px] h-[80px] mx-auto flex flex-row items-center justify-center">
      <h1 className="font-main text-black text-[32px] font-bold ml-[0px]">
        Jobtify
      </h1>
      <button className="bg-white w-[44px] h-[44px] ml-[140px] border-none rounded-lg flex items-center justify-center">
        <BsFilterCircle size="1.4em" />
      </button>
      <Link to="/add">
        <button className="bg-white w-[44px] h-[44px] ml-[12px] border-none rounded-lg flex items-center justify-center">
          <GrAddCircle size="1.4em" />
        </button>
      </Link>
    </div>
  );
};

export default Header;
