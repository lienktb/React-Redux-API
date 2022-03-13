export const getAll = ()=>{
    return new Promise((resolve, reject)=>{
        fetch("http://localhost:3001/products")
        .then(response=>response.json())
        .then(data=> resolve(data))
        .catch(err=> reject(err));
    })
}