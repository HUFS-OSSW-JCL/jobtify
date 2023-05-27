import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import AuthContext from "./util/AuthContext";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import AddFilter from "./pages/AddFilter/AddFilter";
import ScrollTop from "./components/ScrollTop";
import NotFound from "./pages/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    localStorage.setItem("LOGGED_IN", true);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("LOGGED_IN");
    setIsLoggedIn(false);
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
