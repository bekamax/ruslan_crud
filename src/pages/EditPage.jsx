import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  editProduct,
  getOneProduct,
} from "../store/actions/products.actions";
import { useNavigate, useParams } from "react-router-dom";

const EditPRoduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });
  const { oneProduct } = useSelector((state) => state.products);
  console.log(oneProduct);

  const disptach = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    disptach(getOneProduct(id));
  }, [disptach]);

  useEffect(() => {
    oneProduct && setProduct(oneProduct);
  }, [oneProduct]);

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
    disptach(editProduct({ id, product }));
    setProduct({
      title: "",
      prise: "",
      description: "",
      image: "",
    });
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit product</h2>
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
      <button>Save</button>
    </form>
  );
};

export default EditPRoduct;
