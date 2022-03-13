import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

// ProductList.propTypes = {
//   products: PropTypes.array,
//   deleteProduct: PropTypes.func,
// };

// ProductList.defaultTypes = {
//   products: [],
//   deleteProduct: null,
// };
export default function ProductList(props) {
  const { products, deleteProduct } = props;
  return (
    <div>
      <h4 className="m-3 text-center">Danh sách sản phẩm</h4>
      <table className="table table-bordered mt-3">
        <thead className="table-success">
          <tr>
            <th scope="col">STT</th>
            <th scope="col" style={{ width: "150px" }}>
              Mã Sản Phẩm
            </th>
            <th scope="col">Tên Sản Phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col">Trạng Thái</th>
            <th scope="col">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {products.length>0
            ? products.map((product, index) => (
                <ProductItem
                  key={index}
                  index={index + 1}
                  product={product}
                  deleteProduct={deleteProduct}
                ></ProductItem>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
