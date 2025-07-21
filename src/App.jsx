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
  const AddToCart=(AddedProd)=>{
    const ProdExist=cart.find((findItem)=>findItem.id===AddedProd.id)

    if (ProdExist){
      setCart(cart.map((item)=>(item.id===AddedProd.id?{...item,quantity:item.quantity+1}:item)))
    }
    else{
      setCart([...cart,{...AddedProd,quantity:1}])
    }   
  }

  const handleInc=(id)=>{
    const Inc=cart.map((item)=>(
      item.id === id ? {...item,quantity:item.quantity+1}:item
    ))
    setCart(Inc)
  }
  
  const handleDec=(id)=>{
    const Dec=cart.map((item)=>(
      item.id === id && item.quantity>1 ? {...item,quantity:item.quantity-1}:item
    ))
    setCart(Dec)
  }

  const handleRemove=(id)=>{
    const Remove =cart.filter((item)=>(
      item.id !== id
    ))
    setCart(Remove)
  }

  const [promocode,setPromocode]=useState(" ")
  const [discount,setDiscount]=useState(0)
  const [applied,setApplied]=useState('Code Applied')
  // const Applycode=()=>{
  //   if (promocode==='DRV30'){
  //     setDiscount(TotalCost()*0.3)
  //     setPromocode('')
  //   }
  //   else{
  //     alert("Invalid Promocode")
  //   }
  // }

  // const TotalCost=()=>{
  //   const t=cart.reduce((total,item)=>{
  //     return total+ Math.round(item.price*83*item.quantity)
  //   },0)
  //   return t - discount
  // }
  const Applycode = () => {
  if (promocode.trim() === 'DRV30') {
    const t = cart.reduce((total, item) => {
      return total + Math.round(item.price * 83 * item.quantity);
    }, 0);
    setApplied(applied)
    setDiscount(Math.round(t * 0.3));
    setPromocode('');
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
      <Layout cart={cart}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart  
          cart={cart}
          handleDec={handleDec} 
          handleInc={handleInc} 
          handleRemove={handleRemove} 
          TotalCost={TotalCost} 
          Applycode={Applycode}
          promocode={promocode}
          setPromocode={setPromocode}
          applied={applied}/>} />
          <Route path="/fashion" element={<Fashion AddToCart={AddToCart}/>} />
          <Route path="/electronics" element={<Electronics AddToCart={AddToCart}/>} />
          <Route path="/allProducts" element={<AllProducts AddToCart={AddToCart} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
