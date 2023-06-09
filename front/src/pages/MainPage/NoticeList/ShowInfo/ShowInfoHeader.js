import { Link } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import { jdDataState } from "../../../../util/atom";
import { useRecoilValue } from "recoil";
import axios from "axios";

const ShowInfoHeader = (props) => {
  const dataState = useRecoilValue(jdDataState);

  useEffect(() => {
    console.log(props.bookmark);
    if (props.bookmark === true) {
      setIsFavorite((fav) => !fav);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataState]);
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteClickListener = () => {
    setIsFavorite((fav) => !fav);
    // console.log(`fav : ${isFavorite}`);
  };

  const sendData = async () => {
    let data = {
      uid: `${localStorage.getItem("UID")}`,
      bookmark: isFavorite,
      keywords: `${props.keywords}`,
      link: `${props.link}`,
      site: `${props.site}`,
      country: `${props.country}`,
      company: `${props.company}`,
      title: `${props.title}`,
    };
    console.log(data);
    await axios
      .post("http://158.247.238.32:8000/set_bookmark", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => console.log(e));

    let data1 = {
      uid: `${localStorage.getItem("UID")}`,
      link: `${props.link}`,
    };

    await axios
      .post("http://158.247.238.32:8000/get_jd", JSON.stringify(data1), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log(`isFavorite : ${isFavorite}`);
    sendData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

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
          className="transition-all duration-300 text-[30px] ml-[308px] text-yellow-400 border-none"
        >
          <AiFillStar />
        </p>
      ) : (
        <p
          onClick={favoriteClickListener}
          className="transition-all duration-300 text-[30px] ml-[308px] text-gray-400"
        >
          <AiOutlineStar />
        </p>
      )}
      {/* <p className="ml-[5px] font-main text-[23px] text-black font-bold"></p> */}
    </div>
  );
};

export default ShowInfoHeader;
