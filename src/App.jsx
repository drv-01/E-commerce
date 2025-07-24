import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Fashion from "./Pages/Fashion/Fashion";
import Electronics from "./Pages/Electronics/Electronics";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Login from "./Pages/Login/Login";

function App() {
  const [cart, setCart] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");

  const AddToCart = (AddedProd) => {
    const ProdExist = cart.find((findItem) => findItem.id === AddedProd.id);
    if (ProdExist) {
      setCart(
        cart.map((item) =>
          item.id === AddedProd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...AddedProd, quantity: 1 }]);
    }
  };

  const handleInc = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDec = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const [promocode, setPromocode] = useState(" ");
  const [discount, setDiscount] = useState(0);
  const [applied, setApplied] = useState("Code Applied");

  const Applycode = () => {
    if (promocode.trim() === "DRV30") {
      const t = cart.reduce((total, item) => {
        return total + Math.round(item.price * 83 * item.quantity);
      }, 0);
      setApplied(applied);
      setDiscount(Math.round(t * 0.3));
      setPromocode("");
    } else {
      alert("Invalid Promocode");
    }
  };

  const TotalCost = () => {
    const t = cart.reduce((total, item) => {
      return total + Math.round(item.price * 83 * item.quantity);
    }, 0);
    return t - discount;
  };

  return (
    <BrowserRouter>
      <Layout cart={cart} searchedItem={searchedItem} setSearchedItem={setSearchedItem}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleDec={handleDec}
                handleInc={handleInc}
                handleRemove={handleRemove}
                TotalCost={TotalCost}
                Applycode={Applycode}
                promocode={promocode}
                setPromocode={setPromocode}
                applied={applied}
              />
            }
          />
          <Route
            path="/fashion"
            element={<Fashion AddToCart={AddToCart} searchedItem={searchedItem} />}
          />
          <Route
            path="/electronics"
            element={<Electronics AddToCart={AddToCart} searchedItem={searchedItem} />}
          />
          <Route
            path="/allProducts"
            element={<AllProducts AddToCart={AddToCart} searchedItem={searchedItem} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
