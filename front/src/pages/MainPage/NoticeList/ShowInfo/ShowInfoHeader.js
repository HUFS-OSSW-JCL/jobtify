import { Link } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";

const ShowInfoHeader = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteClickListener = () => {
    setIsFavorite(!isFavorite);
  };
  useEffect(() => {
    if (props.bookmark) {
      setIsFavorite(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white w-[395px] h-[55px] mx-auto flex flex-row items-center justify-start">
      <Link to="/">
        <p className="text-[35px] ml-[10px] mt-[2px]">
          <GrFormPrevious />
        </p>
      </Link>
      {isFavorite ? (
        <p
          onClick={favoriteClickListener}
          className="transition-all duration-300 text-[30px] ml-[338px] text-yellow-400 border-none"
        >
          <AiFillStar />
        </p>
      ) : (
        <p
          onClick={favoriteClickListener}
          className="transition-all duration-300 text-[30px] ml-[338px] text-gray-400"
        >
          <AiOutlineStar />
        </p>
      )}

      {/* <p className="ml-[5px] font-main text-[23px] text-black font-bold"></p> */}
    </div>
  );
};

export default ShowInfoHeader;
