import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
