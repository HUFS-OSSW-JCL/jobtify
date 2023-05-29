import Header from "./Header";
import NoticeList from "./NoticeList/NoticeList";
import { useState } from "react";
import Swal from "sweetalert2";

const MainPage = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const changeState = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div className="container flex flex-col items-center justify-center min-w-[395px] mx-auto bg-light-blue">
      <Header />
      <button onClick={changeState}>changeState</button>
      <NoticeList isAvailable={isAvailable} />
      {/* <div className="container max-w-[346px] h-[130px] mt-[40px] mx-auto flex flex-col items-start justify-start bg-light-blue"></div> */}
    </div>
  );
};

export default MainPage;
