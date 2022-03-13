import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, getAll, fetchDeleteProduct } from "../actions/product";
export default function ProductPage() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAll())
  }, []);

  const deleteProduct = (id)=>{
    dispatch(fetchDeleteProduct(id))
  }
  return (
    <div className="container mt-5">
      <Link to="/product/add-product">
        <button type="button" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </Link>
      <ProductList products={products} deleteProduct={deleteProduct}/>
    </div>
  );
}
