import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/Pages/AddProduct/AddProduct";
import AllItems from "./Components/Pages/AllItems/AllItems";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import ManageItems from "./Components/Pages/ManageItems/ManageItems";
import NotFound from "./Components/Pages/NotFound/NotFound";
import OurExclusive from "./Components/Pages/OurExclusive/OurExclusive";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";
import Register from "./Components/Pages/Register/Register";
import RequireAuth from "./Components/Pages/RequireAuth/RequireAuth";
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
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/addProduct" element={<AddProduct></AddProduct>}></Route>
        <Route
          path="/manageProduct/:id"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
