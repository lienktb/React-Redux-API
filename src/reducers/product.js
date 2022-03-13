import * as types from '../constants';
const initState = {
    products: []
}

const productReducer = (state=initState, action)=>{
    let newProducts;
    switch(action.type){
        case types.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case types.DELETE_PRODUCT:
            newProducts = [...state.products].filter(item=>item.id!=action.payload);
            return {
                ...state,
                products: newProducts
            }
        case types.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case types.EDIT_PRODUCT:
            newProducts = [...state.products].map(item=>{
                if(item.id == action.payload.id){
                    item = action.payload
                }
                return item;
            })
            return {
                ...state,
                products: newProducts
            }
        default:
            return state;
    }
}

export default productReducer;