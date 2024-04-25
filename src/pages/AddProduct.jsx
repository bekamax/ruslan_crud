import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions/products.actions";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const disptach = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    for (let key in product) {
      if (!product[key]) {
        alert("Some inputs are empty");
        return;
      }
    }
    disptach(addProduct(product));
    setProduct({
      title: "",
      price: "",
      description: "",
      image: "",
    });
    navigate("/");
  }

  console.log(product);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add product</h2>
      <input
        placeholder="title"
        onChange={handleChange}
        name="title"
        value={product.title}
        type="text"
      />
      <input
        placeholder="description"
        onChange={handleChange}
        name="description"
        value={product.description}
        type="text"
      />
      <input
        placeholder="prise"
        onChange={handleChange}
        name="price"
        value={product.price}
        type="number"
      />
      <input
        placeholder="image"
        onChange={handleChange}
        name="image"
        value={product.image}
        type="url"
      />
      <button>Add</button>
    </form>
  );
};

export default AddProduct;
