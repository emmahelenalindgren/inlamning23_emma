import React from "react";


function ProductView(props) {
  let i = 0;
    console.log(props.products, "product hallååå");
  const productList = props.products.map(p => <li key={i++}>{p.name}, {p.price}kr {p.image}</li>);
  return <ul>{productList}</ul> 
}
                                     
export default ProductView;