import { useEffect, useState } from "react";
import ModalPortal from "../../components/ModalPortal";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../util/AuthContext";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../../util/atom";

const HeaderDropdown = (props) => {
  const { animate } = useRecoilValue(modalState);
  const setIsOpen = useSetRecoilState(modalState);

  const onClose = () => {
    setIsOpen((prev) => {
      return { ...prev, animate: false };
    });
    setTimeout(() => {
      setIsOpen((prev) => {
        return { ...prev, isOpen: false };
      });
    }, 500);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    localStorage.getItem("LOGGED_IN") && setIsLoggedIn(true);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalPortal>
      <div
        className="fixed top-[64px] left-[124px] flex items-start justify-center w-full h-screen"
        onClick={onClose}
      >
        <div
          className={`${
            animate ? "animate-fade-in-down" : "animate-fade-out-down"
          } w-[100px] h-[70px] font-main font-bold rounded-xl border text-end shadow-md bg-white flex flex-col list-none items-end justify-center`}
        >
          {isLoggedIn ? (
            <ul className="mr-[11px]">
              <li>내 정보</li>
              <li onClick={logout} className="cursor-pointer">
                로그아웃
              </li>
            </ul>
          ) : (
            <ul className="mr-[11px]">
              <li>내 정보</li>
              <Link to="/login">
                <li>로그인</li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </ModalPortal>
  );
};

export default HeaderDropdown;
