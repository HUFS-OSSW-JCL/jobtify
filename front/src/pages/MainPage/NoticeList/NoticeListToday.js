import NoticeListItem from "./NoticeListItem";
import { useRecoilValue } from "recoil";
import { userData } from "../../../util/atom";

const NoticeListToday = (props) => {
  const usrData = useRecoilValue(userData);

  return (
    <div className="w-[346px] flex flex-col justify-center items-start mb-[30px]">
      {localStorage.getItem("LOGGED_IN") ? (
        props.isAvailable ? (
          <div className="mt-[5px] container w-[346px] min-h-[150px] rounded-xl mx-auto flex flex-col items-center justify-start bg-white">
            <h1 className="font-main font-bold text-[24px] text-black mr-[143px] mt-[20px] mb-[9px]">
              오늘의 채용공고
            </h1>
            {usrData ? (
              usrData.map((item, id) => {
                return (
                  <NoticeListItem
                    key={id}
                    id={id}
                    // badge={item.crawl[0]}
                    company={item.company}
                    job={item.title}
                    location={item.country}
                    keywords={item.keywords}
                    crawls={item.site}
                    bookmark={item.bookmark}
                    link={item.link}
                  />
                );
              })
            ) : (
              <p>Loading...</p>
            )}
            {/* <NoticeListItem
              badge="wanted"
              company="SK텔레콤"
              job="Web Front-End Engineer"
              location="서울특별시"
            />
            <NoticeListItem
              badge="rallit"
              company="구글코리아"
              job="강아지 쓰다듬는 사람"
              location="서울특별시"
            /> */}
          </div>
        ) : (
          <div className="mt-[5px] container w-[346px] min-h-[140px] rounded-xl mx-auto flex flex-col items-center justify-start bg-white">
            <h1 className="font-main font-bold text-[24px] text-black mr-[143px] mt-[20px] mb-[9px]">
              오늘의 채용공고
            </h1>
            <div className="w-[300px] mt-[25px] mb-[40px] flex flex-col justify-center items-center">
              <p className="text-center font-main font-bold text-[20px]">
                등록된 기업이 없어요
              </p>
              <p className="mt-[10px] font-main text-fontgray text-center text-[14px]">
                상단 오른쪽의 추가 버튼을 눌러서
              </p>
              <p className="font-main text-fontgray text-center text-[14px]">
                공고를 받고싶은 기업을 추가해주세요
              </p>
            </div>
          </div>
        )
      ) : (
        <div className="mt-[10px] container w-[346px] min-h-[140px] rounded-xl mx-auto flex flex-col items-center justify-start bg-white">
          <h1 className="font-main font-bold text-[24px] text-black mr-[143px] mt-[20px] mb-[9px]">
            오늘의 채용공고
          </h1>
          <div className="w-[300px] mt-[25px] mb-[40px] flex flex-col justify-center items-center">
            <p className="text-center font-main font-bold text-[20px]">
              로그인이 필요합니다
            </p>
            <p className="mt-[10px] font-main text-fontgray text-center text-[14px]">
              상단 오른쪽의 프로필 버튼을 눌러서
            </p>
            <p className="font-main text-fontgray text-center text-[14px]">
              로그인을 해주세요
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeListToday;
