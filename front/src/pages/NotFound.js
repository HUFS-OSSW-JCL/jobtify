import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container min-w-[395px] mx-auto flex flex-col items-center justify-center">
      <Helmet>
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
      <h1>존재하지 않는 페이지입니다!</h1>
      <Link to="/">
        <button>뒤로가기</button>
      </Link>
    </div>
  );
};

export default NotFound;
