const CHANGE_TAB = 'CHANGE_TAB';
const ADD_TO_BASKET = 'ADD_TO_BASKET';
const ADD_PRODUCT = 'ADD_PRODUCT';
const HISTORY = 'HISTORY';
const ADD_NUMBER = 'ADD_NUMBER';

function actionChangeTab(selectedTab) {
	return {
		type: CHANGE_TAB,
		tab: selectedTab
	}
}

function actionAddToBasket(selectedProduct) {
	return {
		type: ADD_TO_BASKET,
		product: selectedProduct
	}
}

function actionAddProduct(addProduct) {
	return {
		type: ADD_PRODUCT,
		product: addProduct
	}
}

function actionHistory(action) {
	return {
		type: HISTORY,
		action
	}
}


function actionAddNumber(x) {
	return {
		type: ADD_NUMBER,
		number: x
	}
}



export { HISTORY, ADD_PRODUCT, ADD_TO_BASKET, CHANGE_TAB,  ADD_NUMBER, actionAddNumber, actionChangeTab, actionAddToBasket, actionAddProduct, actionHistory };