import available from "../../../assets/available.png";
import unavailable from "../../../assets/unavailable.png";

const NoticeListItem = (props) => {
  return (
    <div className="w-[296px] h-[75px] bg-white flex flex-row justify-start items-center">
      {props.isAvailable ? (
        <div className="w-[296px] h-[65px] bg-white flex flex-row justify-start items-center">
          <img src={available} className="w-[22px]" alt="available" />
          <div className="ml-[15px] flex flex-col">
            <p className="text-[15px] text-black font-main">필터</p>
            <p className="text-[20px] text-black font-main font-bold">
              변화 보기
            </p>
          </div>
        </div>
      ) : (
        <div className="w-[296px] h-[65px] bg-white flex flex-row justify-start items-center">
          <img src={unavailable} className="w-[22px]" alt="available" />
          <div className="ml-[15px] flex flex-col">
            <p className="text-[15px] text-black font-main">필터</p>
            <p className="text-[20px] text-black font-main font-bold">
              변화 없음
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeListItem;
