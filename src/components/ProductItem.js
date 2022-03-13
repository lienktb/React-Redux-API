import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

ProductItem.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
  deleteProduct:PropTypes.func
};

ProductItem.defaultTypes = {
  product: null,
  index: 0,
  deleteProduct: null
};
export default function ProductItem(props) {
  const { product, index, deleteProduct } = props;
  return (
    <tr className="align-middle">
      <td>{index}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        {product.status ? (
          <span className="bg-success text-white px-2 py-1 rounded">Còn hàng</span>
        ) : (
          <span className="bg-secondary text-white px-2 py-1 rounded">Hết hàng</span>
        )}
      </td>
      <td>
        <Link to={`${product.id}/edit`}><button className="btn btn-warning me-2">Sửa</button></Link>
        <button className="btn btn-danger" onClick={()=>deleteProduct(product.id)}>Xóa</button>
      </td>
    </tr>
  );
}
