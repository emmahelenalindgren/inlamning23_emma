import React, {Component} from "react";
import {actionAddToBasket} from "../actions/actions.js";
import {connect} from "react-redux";


class ProductView extends Component {
    render(){
    let i = 0;
    const productList = this.props.products.map(p => <li key={i++}>{p.name}, {p.price}kr <br /> <img src={p.image}/><br />
    <button onClick={() => this.props.dispatch(actionAddToBasket(p))}>Add to basket</button></li>);
  return <ul>{productList}</ul> }
  
}
                                     
export default connect()(ProductView);
                                            