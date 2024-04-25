import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductList";
import AddProduct from "../pages/AddProduct";
import EditPRoduct from "../pages/EditPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditPRoduct />} />
    </Routes>
  );
};

export default MainRoutes;
