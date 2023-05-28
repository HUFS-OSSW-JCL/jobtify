import FilterHeader from "./FilterHeader";
import Keyword from "./Keyword";
// import Modal from "../../components/Modal";
import Chip from "../../components/Chip";
import Location from "../../components/Location";
import incruit from "../../assets/incruit.png";
import rallit from "../../assets/rallit.png";
import wanted from "../../assets/wanted.jpg";
import jumpit from "../../assets/jumpit.png";
// import { useState } from "react";

const AddFilter = () => {
  // const [location, setLocation] = useState("선택하기");
  // const onSetLocation = (x) => {
  //   setLocation(x);
  // };

  // const [openModal, setOpenModal] = useState(false);
  // const onModalAlert = () => {
  //   setOpenModal(!openModal);
  // };

  return (
    <div className="container max-w-[395px] mx-auto flex flex-col items-center justify-center">
      <FilterHeader />
      {/* {openModal && (
        <Modal onOpenModal={onModalAlert} setLocation={onSetLocation} />
      )} */}
      <div className="w-[390px] ml-[70px] mt-[32px] flex flex-col items-start justify-center">
        <label
          for="filtername"
          className="flex items-start font-bold text-gray-700 font-main"
        >
          필터 이름
        </label>
        <input type="text" className="hidden" />
        <input
          type="text"
          id="filtername"
          className="font-main mt-[8px] rounded-lg flex-1 border border-gray-300 w-[320px] py-2 px-2 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-red transition-all duration-150 focus:border-transparent"
          name="filtername"
          placeholder=""
        />
        <p className="space-x-1 mt-[32px] font-main text-[16px] text-black font-bold">
          직무 키워드
        </p>
        <Keyword />
        <label
          for="location"
          className="mt-[32px] flex items-start font-bold text-gray-700 font-main"
        >
          회사 위치
        </label>
        {/* <button
          onClick={onModalAlert}
          type="button"
          id="location"
          className="text-start font-main mt-[5px] rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-[320px] py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="location"
        >
          {location}
        </button> */}
        <Location />
        <label
          for="location"
          className="mt-[32px] flex items-start font-bold text-gray-700 font-main"
        >
          정보를 가져올 사이트
        </label>
        <div className="flex flex-row">
          <div>
            <Chip name="인크루트" pic={incruit} />
            <Chip name="랠릿" pic={rallit} />
          </div>
          <div>
            <Chip name="원티드" pic={wanted} />
            <Chip name="점핏" pic={jumpit} />
          </div>
        </div>
        <button
          type="submit"
          className="w-[320px] h-[50px] mt-[20px] bg-red text-white text-[17px] font-main font-bold rounded-xl"
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default AddFilter;
