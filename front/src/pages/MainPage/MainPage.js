import Header from "./Header";
import NoticeList from "./NoticeList/NoticeList";
import { useState } from "react";

const MainPage = () => {
  const [isTracking, setIsTracking] = useState(false);
  const changeState = () => {
    setIsTracking(!isTracking);
  };

  return (
    <div className="container flex flex-col items-center justify-center max-w-full mx-auto bg-light-blue">
      <Header />
      <button onClick={changeState}>changeState</button>
      <NoticeList isTracking={isTracking} />
      <div className="container max-w-[346px] h-[130px] mt-[40px] mx-auto flex flex-col items-start justify-start bg-light-blue"></div>
    </div>
  );
};

export default MainPage;
