import Keyword from "../../AddFilter/Keyword";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Chip from "../../../components/Chip";
import Location from "../../../components/Location";
import incruit from "../../../assets/incruit.png";
import rallit from "../../../assets/rallit.png";
import wanted from "../../../assets/wanted.jpg";
import jumpit from "../../../assets/jumpit.png";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userData } from "../../../util/atom";
import { keywordState, locationState, crawlState } from "../../../util/atom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const AfterSignup = () => {
  const navigate = useNavigate();
  const setUserData = useSetRecoilState(userData);
  const keyword = useRecoilValue(keywordState);
  const location = useRecoilValue(locationState);
  const crawl = useRecoilValue(crawlState);
  const [addForm, setAddForm] = useState({
    name: "",
    keyword: [],
    location: "",
    crawl: [],
  });

  const nameInputHandler = (e) => {
    setAddForm((prevState) => {
      return { ...prevState, name: e.target.value };
    });
    // setEmailError(false);
  };

  useEffect(() => {
    setAddForm((prevState) => {
      return { ...prevState, keyword: keyword };
    });
    // console.log(keyword);
    console.log(`form: ${keyword}`);
  }, [keyword]);

  useEffect(() => {
    setAddForm((prevState) => {
      return { ...prevState, location: location };
    });
    // console.log(keyword);
    console.log(`form: ${location}`);
  }, [location]);

  useEffect(() => {
    setAddForm((prevState) => {
      return { ...prevState, crawl: crawl };
    });
    // console.log(keyword);
    console.log(`form: ${crawl}`);
  }, [crawl]);

  const onSubmit = () => {
    const uid = localStorage.getItem("UID");
    const data = {
      uid: uid,
      name: addForm.name,
      keywords: addForm.keyword,
      country: addForm.location,
      sites: addForm.crawl,
    };
    // console.log(data.crawl);
    axios
      .post("http://158.247.238.32:8000/register_user", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserData([response.data]);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        alert("network error...");
      });
  };

  return (
    <div className="container max-w-[395px] mx-auto flex flex-col items-center justify-start">
      <Helmet>
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
      <h1 className="mt-[10px] text-[30px] font-main font-bold mr-[99px]">
        가입을 환영합니다!
      </h1>
      <p className="font-main text-[16px] mr-[72px] mt-[10px]">
        아래 내용을 입력해 이용을 시작해보세요
      </p>
      <div className="pt-[35px]" />
      <div className="w-[395px] flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <label
            htmlFor="filtername"
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
            value={addForm.name}
            onChange={nameInputHandler}
          />
        </div>
        <div className="flex flex-col">
          <p className="space-x-1 ml-[14px] mt-[32px] font-main text-[16px] text-black font-bold">
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
            htmlFor="location"
            className="mt-[32px] flex items-start font-bold text-gray-700 font-main"
          >
            정보를 가져올 사이트
          </label>
          <div className="flex flex-row">
            <div>
              <Chip
                id="incruit"
                name="인크루트"
                pic={incruit}
                onClickHandler={true}
              />
              <Chip
                id="rallit"
                name="랠릿"
                pic={rallit}
                onClickHandler={true}
              />
            </div>
            <div>
              <Chip
                id="wanted"
                name="원티드"
                pic={wanted}
                onClickHandler={true}
              />
              <Chip
                id="jumpit"
                name="점핏"
                pic={jumpit}
                onClickHandler={true}
              />
            </div>
          </div>
        </div>

        <button
          onClick={onSubmit}
          className="w-[320px] h-[50px] mt-[20px] mb-[20px] bg-red text-white text-[17px] font-main font-bold rounded-xl"
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default AfterSignup;
