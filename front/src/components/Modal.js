import { useEffect, useState } from "react";
import ModalPortal from "./ModalPortal";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Modal = (props) => {
  const [selected, setSelected] = useState(false);
  const [locationData, setLocationData] = useState([
    { value: "서울", id: "1", checked: false },
    { value: "인천", id: "2", checked: false },
    { value: "대전", id: "3", checked: false },
    { value: "대구", id: "4", checked: false },
    { value: "광주", id: "5", checked: false },
    { value: "울산", id: "6", checked: false },
    { value: "부산", id: "7", checked: false },
    { value: "세종", id: "8", checked: false },
  ]);

  const ltSelectHandler = (id) => {
    const updatedCheckbox = locationData.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: true }
        : { ...checkbox, checked: false }
    );
    setLocationData(updatedCheckbox);
    setSelected(!selected);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const setLocation = (x) => {
    props.setLocation(x);
  };

  return (
    <ModalPortal>
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-60">
        <div className="transition ease-out duration-200 container w-[320px] h-[600px] flex flex-col items-center justify-start rounded-xl bg-white border-transparent border">
          <div className="items-center">
            <p className="font-main text-[22px] mt-[7px] ml-[0px] mb-[8px] text-black font-bold">
              지역을 선택해주세요
            </p>
            <div className="overflow-auto">
              {locationData.map((e) => {
                return (
                  <button
                    key={e.id}
                    className={`group w-[290px] h-[45px] mb-[10px] border ${
                      e.checked ? "border-red font-bold" : "border-gray-300"
                    } font-main text-[17px] rounded-xl text-start pl-3 flex flex-row items-center transition-all duration-300`}
                    onClick={() => {
                      setLocation(e.value);
                      ltSelectHandler(e.id);
                    }}
                  >
                    {e.checked ? (
                      <p className="mr-[10px] text-[30px] text-red transition-colors duration-300">
                        <AiOutlineCheckCircle />
                      </p>
                    ) : (
                      <p className="mr-[10px] text-[30px] text-gray-300 transition-colors duration-300">
                        <AiOutlineCheckCircle />
                      </p>
                    )}
                    {e.value}
                  </button>
                );
              })}
            </div>
            {selected ? (
              <button
                onClick={props.onOpenModal}
                className="w-[290px] h-[45px] mt-[20px] bg-red text-white text-[17px] font-main font-bold rounded-xl transition-colors duration-300"
              >
                완료
              </button>
            ) : (
              <button
                onClick={props.onOpenModal}
                className="w-[290px] h-[45px] mt-[20px] bg-gray-300 text-white text-[17px] font-main font-bold rounded-xl transition-colors duration-300"
              >
                완료
              </button>
            )}
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
