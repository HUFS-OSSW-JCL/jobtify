import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const FilterHeader = () => {
  return (
    <div className="bg-white w-[390px] h-[55px] mx-auto flex flex-row items-center justify-start">
      <Link to="/main">
        <p className="text-[35px] ml-[10px] mt-[2px]">
          <GrFormPrevious />
        </p>
      </Link>
      <p className="ml-[5px] font-main text-[23px] text-black font-bold">
        필터 만들기
      </p>
    </div>
  );
};

export default FilterHeader;
