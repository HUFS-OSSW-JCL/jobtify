import incruit from "../../../assets/incruit.png";
import jumpit from "../../../assets/jumpit.png";
import wanted from "../../../assets/wanted.jpg";
import rallit from "../../../assets/rallit.png";
import { useEffect, useState } from "react";

const NoticeListItem = (props) => {
  const [badge, setBadge] = useState(null);

  useEffect(() => {
    if (props.badge === "incruit") {
      setBadge(incruit);
    } else if (props.badge === "jumpit") {
      setBadge(jumpit);
    } else if (props.badge === "wanted") {
      setBadge(wanted);
    } else if (props.badge === "rallit") {
      setBadge(rallit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-[296px] h-[70px] mb-[5px] bg-white flex flex-row justify-start items-center">
      <div
        key={props.key}
        className="w-[296px] h-[65px] bg-white flex flex-row justify-start items-center"
      >
        <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-gray-300 transition-colors duration-300">
          <img className="rounded-full" src={badge} alt="jobkorea" />
        </div>
        <div className="ml-[15px] flex flex-col">
          <p className="text-[15px] text-gray-500 font-main">회사명</p>
          <p className="text-[20px] text-black font-main font-bold">직무명</p>
        </div>
      </div>
    </div>
  );
};

export default NoticeListItem;
