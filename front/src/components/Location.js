import { useState, useEffect } from "react";
import DropDown from "./DropDown";

const deselectedOptions = [
  "서울특별시",
  "인천광역시",
  "대구광역시",
  "대전광역시",
  "부산광역시",
  "광주광역시",
  "울산광역시",
  "세종특별자치시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도 제주시",
  "제주특별자치도 서귀포시",
];

const Location = () => {
  const [hasText, setHasText] = useState(false); // input값 유무
  const [inputValue, setInputValue] = useState(""); // input값 상태
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState(deselectedOptions); // input값을 포함하는 autocomplete 추천 리스트 확인

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
    }
  }, [inputValue]);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    setHasText(!hasText);
  };

  const dropDownClickHandler = (clickedOption) => {
    setInputValue(deselectedOptions[clickedOption]);
    // console.log(clickedOption);
  };

  return (
    <div>
      <div onChange={inputChangeHandler}>
        <input
          type="text"
          id="location"
          className="mt-[8px] rounded-lg flex-1 border border-gray-300 w-[320px] py-2 px-2 bg-white text-gray-700 placeholder-gray-400 font-main text-base focus:outline-none focus:ring-2 focus:ring-red transition-all duration-150 focus:border-transparent"
          name="location"
          placeholder=""
          onChange={inputChangeHandler}
          value={inputValue}
        />
      </div>
      {inputValue ? (
        <DropDown
          options={options}
          comboBoxHandler={inputValue}
          onClick={(e) => dropDownClickHandler(e)}
        />
      ) : null}
    </div>
  );
};

export default Location;
