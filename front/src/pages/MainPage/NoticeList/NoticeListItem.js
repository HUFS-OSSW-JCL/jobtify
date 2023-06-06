import incruit from "../../../assets/incruit.png";
import jumpit from "../../../assets/jumpit.png";
import wanted from "../../../assets/wanted.jpg";
import rallit from "../../../assets/rallit.png";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NoticeListItem = (props) => {
  const navigate = useNavigate();

  const [badge, setBadge] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [crawls, setCrawls] = useState([]);

  useEffect(() => {
    setKeywords((props.keywords || "").split("=="));
    setCrawls((props.crawls || "").split("=="));
    console.log(crawls);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (crawls[0] === "incruit") {
      setBadge(incruit);
    } else if (crawls[0] === "jumpit") {
      setBadge(jumpit);
    } else if (crawls[0] === "wanted") {
      setBadge(wanted);
    } else if (crawls[0] === "rallit") {
      setBadge(rallit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [crawls]);

  const onClickListener = () => {
    navigate("/ShowInfo", {
      state: {
        // badge: badge,
        // badgeName: props.badge,
        company: props.company,
        job: props.job,
        location: props.location,
        keyword: keywords,
        crawls: crawls,
        bookmark: props.bookmark,
      },
    });
  };

  return (
    <Fragment>
      <div
        onClick={onClickListener}
        className="w-[296px] h-[70px] ml-[3px] mb-[5px] bg-white flex flex-row justify-start items-center"
      >
        <div className="w-[296px] h-[65px] bg-white flex flex-row justify-start items-center">
          <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full border border-gray-300">
            <img className="rounded-full" src={badge} alt="jobkorea" />
          </div>
          <div className="ml-[15px] flex flex-col">
            <p className="text-[15px] text-gray-500 font-main">
              {props.company}
            </p>
            <p className="text-[18px] text-black font-main font-bold">
              {props.job}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NoticeListItem;
