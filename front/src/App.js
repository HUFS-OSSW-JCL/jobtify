import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <ScrollTop />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
