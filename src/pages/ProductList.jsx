import React, { useEffect } from "react";
import { deleteProduct, getProducts } from "../store/actions/products.actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, loading } = useSelector((state) => state.products);
  console.log(products);

  const disptach = useDispatch();
  useEffect(() => {
    disptach(getProducts());
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ display: "flex" }}>
          {products.map((item) => (
            <div key={item.id} style={{ padding: "20px 10px" }}>
              <img src={item.image} alt="" style={{ width: "100px" }} />
              <h3>{item.title}</h3>
              <span>{item.price}</span>
              <p>{item.description}</p>
              <div>
                <Link to={`/edit/${item.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => disptach(deleteProduct(item.id))}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
