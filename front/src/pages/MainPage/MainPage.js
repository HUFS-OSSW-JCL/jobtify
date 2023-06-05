import Header from "./Header";
import NoticeListSaved from "./NoticeList/NoticeListSaved";
import NoticeListToday from "./NoticeList/NoticeListToday";
import { saveState } from "../../util/atom";
import { useRecoilState } from "recoil";
import { Helmet } from "react-helmet";

const MainPage = () => {
  // const [isAvailable, setIsAvailable] = useState(false);
  const [isSaved, setIsSaved] = useRecoilState(saveState);
  const isAvailable = true;
  const changeState = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <div className="container flex flex-col items-center justify-start min-w-[395px] mx-auto bg-light-blue">
      <Helmet>
        <meta name="theme-color" content="#EEF1F4" />
      </Helmet>
      <Header />
      <div className="pt-[66px]"></div>
      <button onClick={changeState}>changeState</button>
      <NoticeListSaved isSaved={isSaved} />
      <NoticeListToday isAvailable={isAvailable} />
      {/* <div className="container max-w-[346px] h-[130px] mt-[40px] mx-auto flex flex-col items-start justify-start bg-light-blue"></div> */}
    </div>
  );
};

export default MainPage;
