import FilterHeader from "./FilterHeader";
import Keyword from "./Keyword";
import { Helmet } from "react-helmet";
import Chip from "../../components/Chip";
import Location from "../../components/Location";
import incruit from "../../assets/incruit.png";
import rallit from "../../assets/rallit.png";
import wanted from "../../assets/wanted.jpg";
import jumpit from "../../assets/jumpit.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddFilter = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("LOGGED_IN")) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container max-w-[390px] mx-auto flex flex-col items-center justify-start">
      <Helmet>
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
      <FilterHeader />
      <div className="pt-[75px]" />
      <div className="w-[390px] flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <input type="text" className="hidden" />
          {/* <input
            type="text"
            id="filtername"
            className="font-main mt-[8px] rounded-lg flex-1 border border-gray-300 w-[320px] py-2 px-2 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-red transition-all duration-150 focus:border-transparent"
            name="filtername"
            placeholder=""
          /> */}
        </div>
        <div className="flex flex-col">
          <p className="space-x-1 ml-[14px] mt-[0px] font-main text-[16px] text-black font-bold">
            직무 키워드
          </p>
          <Keyword />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="location"
            className="mt-[32px] flex items-start font-bold text-gray-700 font-main"
          >
            회사 위치
          </label>
          <Location />
        </div>
        <div className="flex flex-col w-[320px]">
          <label
            for="location"
            className="mt-[32px] flex items-start font-bold text-gray-700 font-main"
          >
            정보를 가져올 사이트
          </label>
          <div className="flex flex-row">
            <div>
              <Chip name="인크루트" pic={incruit} onClickHandler={true} />
              <Chip name="랠릿" pic={rallit} onClickHandler={true} />
            </div>
            <div>
              <Chip name="원티드" pic={wanted} onClickHandler={true} />
              <Chip name="점핏" pic={jumpit} onClickHandler={true} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-[320px] h-[50px] mt-[20px] mb-[20px] bg-red text-white text-[17px] font-main font-bold rounded-xl"
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default AddFilter;
