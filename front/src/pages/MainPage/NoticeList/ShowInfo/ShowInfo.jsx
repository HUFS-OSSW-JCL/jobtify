import { Helmet } from "react-helmet";
import ShowInfoHeader from "./ShowInfoHeader";
import ShowInfoChip from "./ShowInfoChip";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jdDataState } from "../../../../util/atom";
import { useRecoilState } from "recoil";
import axios from "axios";

const ShowInfo = (props) => {
  const [dataState, setDataState] = useRecoilState(jdDataState);

  useEffect(() => {
    if (company === null) {
      navigate("/");
    }
    getJd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJd = async () => {
    let data = {
      uid: `${localStorage.getItem("UID")}`,
      link: `${link}`,
    };
    await axios
      .post("http://158.247.238.32:8000/get_jd", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response.data);
        setDataState(response.data);
      })
      .catch((e) => console.log(e));
  };

  const navigate = useNavigate();

  const data = useLocation();
  const company = dataState.company;
  const title = dataState.title;
  const location = dataState.country;
  const keyword = dataState.keywords;
  const crawls = dataState.site;
  const bookmark = dataState.bookmark;
  const link = data.state?.link;

  return (
    <div className="container min-w-[390px] mx-auto flex flex-col items-center justify-center">
      <Helmet>
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
      <ShowInfoHeader
        bookmark={bookmark}
        company={company}
        country={location}
        site={crawls}
        title={title}
        link={link}
        keywords={keyword}
      />
      <div className="min-w-[390px] ml-[35px] mt-[10px] flex flex-col items-start justify-start">
        <p className="text-[18px] font-main text-gray-400 mb-[-5px]">
          {dataState ? company : <p>Loading...</p>}
        </p>
        <p className="max-w-[370px] overflow-auto text-[34px] font-main font-bold text-black">
          {dataState ? title : <p>Loading...</p>}
        </p>
      </div>
      <div className="min-w-[390px] ml-[35px] mt-[30px] flex flex-col items-start justify-start overflow-auto">
        <p className="text-[18px] font-main font-bold text-gray-400">키워드</p>
        <div className="flex flex-wrap items-center w-[350px] mb-[10px] break-all">
          {keyword &&
            keyword.map((item, id) => {
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
      <div className="min-w-[390px] ml-[35px] mt-[30px] flex flex-col items-start justify-start">
        <p className="text-[18px] font-main font-bold text-gray-400">
          회사 위치
        </p>
        <p className="text-[18px] font-main text-black mt-[4px]">
          {dataState ? dataState.country : <p>Loading...</p>}
        </p>
      </div>
      <div className="min-w-[390px] ml-[35px] mt-[30px] flex flex-col items-start justify-start">
        <p className="text-[18px] font-main font-bold text-gray-400">
          정보를 가져오는 사이트
        </p>
        {crawls &&
          crawls.map((item) => {
            if (item !== "") {
              return (
                <ShowInfoChip name={item} pic={item} key={item} link={link} />
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
};

export default ShowInfo;
