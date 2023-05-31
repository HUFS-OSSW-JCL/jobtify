import Header from "./Header";
import NoticeList from "./NoticeList/NoticeList";
import { useState } from "react";
import { Helmet } from "react-helmet";

const MainPage = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const changeState = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div className="container flex flex-col items-center justify-start min-w-[395px] mx-auto bg-light-blue">
      <Helmet>
        <meta name="theme-color" content="#EEF1F4" />
      </Helmet>
      <Header />
      <div className="pt-[66px]"></div>
      <button onClick={changeState}>changeState</button>
      <NoticeList isAvailable={isAvailable} />
      {/* <div className="container max-w-[346px] h-[130px] mt-[40px] mx-auto flex flex-col items-start justify-start bg-light-blue"></div> */}
    </div>
  );
};

export default MainPage;
