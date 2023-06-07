import { useState, useEffect } from "react";
import incruit from "../../../../assets/incruit.png";
import jumpit from "../../../../assets/jumpit.png";
import wanted from "../../../../assets/wanted.jpg";
import rallit from "../../../../assets/rallit.png";

const ShowInfoChip = (props) => {
  const [badge, setBadge] = useState(null);
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
    <div className="mr-[10px]">
      <div className="w-max h-[45px] mt-[7px] border border-gray-300 flex flex-row justify-start items-center bg-white rounded-3xl transition-colors duration-300">
        <div className="w-[28px] h-[28px] ml-[10px] flex justify-center items-center rounded-full border border-gray-300 transition-colors duration-300">
          <img className="rounded-full" src={badge} alt="jobkorea" />
        </div>
        <div className="w-max ml-[8px] mr-[12px] flex items-center justify-center">
          <p className="font-main text-[14px] font-bold text-black">
            {props.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowInfoChip;
