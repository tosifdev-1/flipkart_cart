import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/cart";
import productList from "./components/data";
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState();
  const [allProduct, setallProduct] = useState([]);
  console.log("cart added", cart);
  console.log("allproducts",allProduct)
  const Path = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav cart={allProduct}></Nav>
          <Home setCart={setCart}></Home>
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Nav cart={allProduct}></Nav>
          <Cart cart={allProduct} setallProduct={setallProduct}></Cart>
        </>
      ),
    },
  ]);

  useEffect(() => {
    const filterData = productList.filter((items) => items.id == cart);
    console.log(filterData);
    setallProduct([...allProduct,...filterData]);
  }, [cart]);
  return (
    <>
      <RouterProvider router={Path} />
    </>
  );
}

export default App;
