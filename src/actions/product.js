import * as types from '../constants';

export const getAll = () => {
    return (dispatch) =>{
        return  fetch("http://localhost:3001/products")
          .then((response) => response.json())
          .then(data=> dispatch(setProduct(data)))
          .catch((err) => console.log(err))
        }
};

export const setProduct = (payload)=>({
    type: types.SET_PRODUCTS,
    payload
})

export const deleteProduct = (payload)=>({
    type: types.DELETE_PRODUCT,
    payload
})

export const fetchDeleteProduct = (id)=>{
    return async(dispatch)=>{
        return await fetch(`http://localhost:3001/products/${id}`,{
            method: "DELETE",
            headers: {
              'Content-Type':'application/json',
            }
          }).then(response=>dispatch(deleteProduct(id)))
          .catch(err=>err)
    }
}

export const fetchAddProduct = (payload)=>{
    return async (dispatch)=>{
        return await fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }).then(response=>response.json())
          .then(data=>dispatch(addProduct(data)))
          .catch(err=>err);
    }
}

export const addProduct = payload=>({
    type: types.ADD_PRODUCT,
    payload
})

export const fetchEditProduct = payload=>{
    return async (dispatch)=>{
        return await fetch(`http://localhost:3001/products/${payload.id}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }).then(response=>response.json())
          .then(res=>dispatch(editProduct(res)))
          .catch(err=>err);
    }
}

const editProduct = (payload)=>({
    type: types.EDIT_PRODUCT,
    payload
})