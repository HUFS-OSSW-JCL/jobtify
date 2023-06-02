import { Link } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";

const ShowInfoHeader = () => {
  return (
    <div className="fixed bg-white w-[395px] h-[55px] mx-auto flex flex-row items-center justify-start">
      <Link to="/">
        <p className="text-[35px] ml-[10px] mt-[2px]">
          <GrFormPrevious />
        </p>
      </Link>
      <p className="ml-[5px] font-main text-[23px] text-black font-bold"></p>
    </div>
  );
};

export default ShowInfoHeader;
