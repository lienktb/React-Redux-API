import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate, useParams} from 'react-router-dom'
import { fetchAddProduct, fetchEditProduct } from "../actions/product";

export default function ProductActionPage() {
  const [product, setProduct] = useState({id:"", name:"", price:0, status:false});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e)=>{    
    const value = e.target.name=="status" ? e.target.checked : e.target.value
    setProduct({...product, [e.target.name]: value});
  }

  const param = useParams();
  useEffect(()=>{
    if(param.id){
      getById(param.id);
    }
  },[])


  const getById = async(id)=>{
    const res = await fetch(`http://localhost:3001/products/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response=>response.json())
    .catch(err=>err);
    setProduct(res)
  }
  
  const onSubmit= async()=>{
    if(param.id){
      dispatch(fetchEditProduct(product))
    }else{
      dispatch(fetchAddProduct(product));
    }
    navigate(-1);
  }
  return (
    <div className="container">
      <h4 className="m-3 text-center">{param.id? "Sửa sản phẩm": "Thêm sản phẩm"}</h4>
      <div style={{width: '700px', margin: '0 auto'}}>
        <div className="form-group">
          <label>Tên</label>
          <input type="text" className="form-control" name="name" value={product.name} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="form-group mt-4">
          <label>Giá</label>
          <input type="text" className="form-control" name="price" value={product.price} onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="form-check mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            checked={product.status}
            name="status"
            onChange={(e)=>handleChange(e)}
          />
          <label className="form-check-label">
              Còn hàng
          </label>
        </div>

        <button className="btn btn-success mt-4" onClick={()=>onSubmit()}>Lưu</button>
      </div>
    </div>
  );
}
