import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllItems from "./Components/Pages/AllItems/AllItems";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import NotFound from "./Components/Pages/NotFound/NotFound";
import OurExclusive from "./Components/Pages/OurExclusive/OurExclusive";
import Register from "./Components/Pages/Register/Register";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/allItems" element={<AllItems></AllItems>}></Route>
        <Route
          path="/Exclusive"
          element={<OurExclusive></OurExclusive>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
