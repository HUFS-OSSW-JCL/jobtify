const NoticeList = (props) => {
  return (
    <div className="w-[346px] flex flex-col justify-center items-start">
      {props.isTracking ? (
        <div className="mt-[10px] container w-[346px] min-h-[380px] rounded-xl mx-auto flex flex-col items-center justify-start bg-white">
          <h1 className="font-main font-bold text-[24px] text-black mr-[167px] mt-[20px]">
            나의 채용공고
          </h1>
        </div>
      ) : (
        <div className="mt-[10px] container w-[346px] min-h-[380px] rounded-xl mx-auto flex flex-col items-center justify-start bg-white">
          <h1 className="font-main font-bold text-[24px] text-black mr-[167px] mt-[20px]">
            나의 채용공고
          </h1>
          <div className="w-[300px] mt-[105px] flex flex-col justify-center items-center">
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
      )}
    </div>
  );
};

export default NoticeList;
