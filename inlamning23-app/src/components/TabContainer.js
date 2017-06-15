import React, {Component} from 'react';
import ListView from './ListView';
import {actionChangeTab, actionAddToBasket, actionAddNumber, actionHistory, actionAddProduct } from '../actions/actions.js';
import {connect} from 'react-redux';
import Picture from './picture';
import History from './history';
import ProductView from "./ProductView";
import AddProductPage from "./addproduct";
import Basket from "./basket";


class TabComponent extends Component {
	constructor(props) {
		super(props);
		this.handleClickProducts = this.handleClickProducts.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
		this.handleClickHistory = this.handleClickHistory.bind(this);
        this.handleClickPicture = this.handleClickPicture.bind(this);
        this.handleClickBasket = this.handleClickBasket.bind(this);
	}
	render() {
		let view;
		if( this.props.tab === 1 ) {
            console.log(this.props.products, "halå vart är du");
			view = <ProductView products={this.props.products} />;
		} else if( this.props.tab === 2 ) {
			view = <Basket basket={this.props.basket} />;
		} else if ( this.props.tab === 3 ) {
			view = <AddProductPage handleAddProduct={this.handleAddProductToList} />;
		} else  {
			view = <History history={this.props.history}/>;
		} 
		return (
			<div className="App">
			<div className="tabheader">
				<button onClick={this.handleClickProducts}>Produkter</button>
				<button onClick={this.handleClickBasket}>Kundvagn</button>
                <button onClick={this.handleClickAdd}>Lägg till</button>
				<button onClick={this.handleClickHistory}>Historik</button>
			</div>
			<div className="tabbody">
				{view}
			</div>
        
		  </div>
		);
	}
    
  
    
    handleClickAddNumber(e) {
         let action = actionAddNumber(42);
        console.log("actionAddNumber");
          this.props.dispatch(action);
		this.props.dispatch( actionHistory(action) );
	}   
    
     
     
    	handleClickProducts(e) {
		this.changeTab(1);
        console.log("actionchangetab");
		
	}


     handleClickBasket(e) {
		this.changeTab(2);
		
	}
    
    handleClickAdd(e) {
		this.changeTab(3);
		
	}
	handleClickHistory(e) {
		this.changeTab(4);
		
	}
   
    handleClickNumbers(e) {
		this.changeTab(5);
	}
    handleClickPicture(e) {
		this.changeTab(6);
	}
    changeTab(tab){
        let action = actionChangeTab(tab);
        this.props.dispatch(action);
         this.props.dispatch( actionHistory(action) );
    }
}
    


function mapStateToProps(state) {
	console.log('state:', state);
	return {
		tab: state.tab,
		imageUrl: state.imageUrl,
		numbers: state.numbers,
        history: state.history,
        products: state.products,
        basket: state.basket
	}
}

export default connect(mapStateToProps)(TabComponent);


