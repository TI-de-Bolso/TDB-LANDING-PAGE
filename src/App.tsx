import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BusinessPage from "./pages/business";
import { useScrollToHash } from "./hooks/useScrollToHash";



function App() {

  useScrollToHash()
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<BusinessPage/>} />
      </Routes>
    </>
  );
}

export default App;