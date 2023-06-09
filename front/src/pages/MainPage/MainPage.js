import Header from "./Header";
import NoticeListSaved from "./NoticeList/NoticeListSaved";
import NoticeListToday from "./NoticeList/NoticeListToday";
import { userData, todayState } from "../../util/atom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
  const setUserData = useSetRecoilState(userData);
  const usrData = useRecoilValue(userData);
  const [loaded, setLoaded] = useState(false);

  const [isAvailable, setIsAvailable] = useRecoilState(todayState);

  const getJds = () => {
    let data = {
      uid: `${localStorage.getItem("UID")}`,
    };
    axios
      .post("http://158.247.238.32:8000/get_jds", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setUserData(response.data);
        setLoaded(true);
        console.log(response.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (localStorage.getItem("LOGGED_IN")) {
      // fetchData();
      getJds();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("LOGGED_IN")) {
      setUserData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStorage.getItem("LOGGED_IN") && loaded) {
      if (usrData.length === 0) {
        setIsAvailable(false);
      } else {
        setIsAvailable(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usrData, setUserData]);

  return (
    <div className="container flex flex-col items-center justify-start min-w-[390px] mx-auto bg-light-blue">
      <Helmet>
        <meta name="theme-color" content="#EEF1F4" />
      </Helmet>
      <Header />
      <div className="pt-[66px]"></div>
      {/* <button onClick={changeState}>changeState</button> */}

      <NoticeListSaved />
      <NoticeListToday isAvailable={isAvailable} />
      <div className="min-w-[390px] bg-light-blue min-h-[130px]"></div>
      {/* <div className="container max-w-[346px] h-[130px] mt-[40px] mx-auto flex flex-col items-start justify-start bg-light-blue"></div> */}
    </div>
  );
};

export default MainPage;
