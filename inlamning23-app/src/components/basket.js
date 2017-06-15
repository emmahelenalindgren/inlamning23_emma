import React, { Component } from 'react';
import '../App.css';


 class Basket extends Component {
  render() {
    let i = 0;
    const productList = this.props.basket.map(p => <li key={i++}>{p.name}, {p.price}kr <br /> <img src={p.image}/><br />
    </li>);

    return (
        <div>
            <p>Din kundvagn</p>
            <ul>
                {productList}
            </ul>
            <div>Antal varor i kundvagnen: {productList.length}</div>                                      
        </div>
        
    );
  }
}


export default Basket;