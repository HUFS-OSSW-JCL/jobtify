import { useState, useEffect } from "react";
import incruit from "../assets/incruit.png";
import jumpit from "../assets/jumpit.png";
import wanted from "../assets/wanted.jpg";
import rallit from "../assets/rallit.png";
import { crawlState } from "../util/atom";
import { useRecoilState } from "recoil";

const Chip = (props) => {
  const [crawl, setCrawl] = useRecoilState(crawlState);

  // eslint-disable-next-line no-unused-vars
  const [badge, setBadge] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const chipClickHandler = () => {
    setIsChecked(!isChecked);
    if (crawl.includes(props.id)) {
      removeTag();
    } else {
      setCrawl([...crawl, props.id]);
    }
    console.log(crawl);
  };

  useEffect(() => {
    console.log(crawl);
  }, [crawl]);

  const removeTag = () => {
    const clonetags = crawl.slice();
    const i = clonetags.indexOf(props.id);
    clonetags.splice(i, 1);
    setCrawl(clonetags);
    // console.log(keyword);
  };

  useEffect(() => {
    if (props.pic === "incruit") {
      setBadge(incruit);
    } else if (props.pic === "jumpit") {
      setBadge(jumpit);
    } else if (props.pic === "wanted") {
      setBadge(wanted);
    } else if (props.pic === "rallit") {
      setBadge(rallit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={props.onClickHandler ? chipClickHandler : null}
      className="mr-[10px]"
    >
      {isChecked ? (
        <div
          id={props.id}
          className="w-max h-[45px] mt-[7px] hover: cursor-pointer border border-checked2 bg-checked flex flex-row justify-center items-center rounded-3xl transition-colors duration-300"
        >
          <div className="w-[28px] h-[28px] ml-[10px] flex justify-center items-center rounded-full border border-checked2 transition-colors duration-300">
            <img className="rounded-full" src={props.pic} alt="jobkorea" />
          </div>
          <div className="w-max ml-[8px] mr-[12px] flex items-center justify-center">
            <p className="font-main text-[14px] font-bold text-black">
              {props.name}
            </p>
          </div>
        </div>
      ) : (
        <div
          id={props.id}
          className="w-max h-[45px] mt-[7px] hover: cursor-pointer border border-gray-300 flex flex-row justify-start items-center bg-white rounded-3xl transition-colors duration-300"
        >
          <div className="w-[28px] h-[28px] ml-[10px] flex justify-center items-center rounded-full border border-gray-300 transition-colors duration-300">
            <img className="rounded-full" src={props.pic} alt="jobkorea" />
          </div>
          <div className="w-max ml-[8px] mr-[12px] flex items-center justify-center">
            <p className="font-main text-[14px] font-bold text-black">
              {props.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chip;
