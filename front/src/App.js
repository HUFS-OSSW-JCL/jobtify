import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import AuthContext from "./util/AuthContext";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import AddFilter from "./pages/AddFilter/AddFilter";
import ScrollTop from "./components/ScrollTop";
import NotFound from "./pages/NotFound";
import Swal from "sweetalert2";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    localStorage.setItem("LOGGED_IN", true);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("LOGGED_IN");
    setIsLoggedIn(false);
    let timerInterval;
    Swal.fire({
      title: "로그아웃",
      html: "정상적으로 로그아웃 되었습니다.",
      timer: 1500,
      timerProgressBar: true,
      width: "395px",
      showConfirmButton: false,
      position: "center-start",
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <ChakraProvider>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/add" element={<AddFilter />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </AuthContext.Provider>
  );
}

export default App;
