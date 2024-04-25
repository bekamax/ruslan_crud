import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/slices/counter.slice";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  const disptach = useDispatch();
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;

{
  /* 
  const { counter } = useSelector((state) => state.counter);
<button
  onClick={() => disptach(decrement())}
  style={{ width: "50px", height: "50px", fontSize: "30px" }}
>
  -
</button>
<h1>{counter}</h1>
<button
  onClick={() => disptach(increment())}
  style={{ width: "50px", height: "50px", fontSize: "30px" }}
>
  +
</button> */
}
