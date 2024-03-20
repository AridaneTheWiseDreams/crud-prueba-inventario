import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { ProductManager } from "./pages/ProductManager";
import { Login } from "./pages/Login";
import PrivateRoute from "./utils/PrivateRoute";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute onlyLogged={true} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-manager" element={<ProductManager />} />
        </Route>
      </Routes>
    </Router>
  );
}
