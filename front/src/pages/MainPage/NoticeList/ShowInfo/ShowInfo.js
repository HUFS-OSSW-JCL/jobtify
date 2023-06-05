import { Helmet } from "react-helmet";
import ShowInfoHeader from "./ShowInfoHeader";

const ShowInfo = () => {
  return (
    <div className="container min-w-[395px] mx-auto flex flex-col items-center justify-start">
      <Helmet>
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
      <ShowInfoHeader />
      <p className="text-[16px] font-main text-gray-400">회사명</p>
    </div>
  );
};

export default ShowInfo;
