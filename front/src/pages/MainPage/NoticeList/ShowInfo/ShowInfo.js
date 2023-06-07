import { Helmet } from "react-helmet";
import ShowInfoHeader from "./ShowInfoHeader";
import ShowInfoChip from "./ShowInfoChip";
// import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ShowInfo = () => {
  const data = useLocation();
  const company = data.state?.company;
  const job = data.state?.job;
  const location = data.state?.location;
  const keyword = data.state?.keyword;
  const crawls = data.state?.crawls;
  const bookmark = data.state?.bookmark;
  // useEffect(() => {
  //   console.log(crawls);
  // }, []);

  return (
    <div className="container max-w-[395px] mx-auto flex flex-col items-start justify-start">
      <Helmet>
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
      <ShowInfoHeader bookmark={bookmark} />
      <div className="min-w-[395px] ml-[35px] mt-[10px] flex flex-col items-start justify-start">
        <p className="text-[18px] font-main text-gray-400 mb-[-5px]">
          {company}
        </p>
        <p className="w-[380px] overflow-auto text-[34px] font-main font-bold text-black">
          {job}
        </p>
      </div>
      <div className="min-w-[395px] ml-[35px] mt-[30px] flex flex-col items-start justify-start overflow-auto">
        <p className="text-[18px] font-main font-bold text-gray-400">키워드</p>
        <div className="flex flex-wrap items-center w-[350px] mb-[10px] break-all">
          {keyword.map((item, id) => {
            if (item !== "") {
              return (
                <div
                  key={id}
                  className="flex justify-center items-center bg-light-blue rounded-3xl p-4 mt-[10px] mr-[10px] mb-[10px] h-[40px]"
                >
                  <p className="font-main text-black text-[14px]">{item}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="min-w-[395px] ml-[35px] mt-[30px] flex flex-col items-start justify-start">
        <p className="text-[18px] font-main font-bold text-gray-400">
          회사 위치
        </p>
        <p className="text-[18px] font-main text-black mt-[4px]">{location}</p>
      </div>
      <div className="min-w-[395px] ml-[35px] mt-[30px] flex flex-col items-start justify-start">
        <p className="text-[18px] font-main font-bold text-gray-400">
          정보를 가져오는 사이트
        </p>
        {crawls &&
          crawls.map((item) => {
            if (item !== "") {
              return <ShowInfoChip name={item} pic={item} key={item.id} />;
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default ShowInfo;
