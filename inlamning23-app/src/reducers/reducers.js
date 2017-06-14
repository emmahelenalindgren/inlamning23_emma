import { CHANGE_TAB, ADD_NUMBER, HISTORY, ADD_PRODUCT} from '../actions/actions.js';


function tabReducer(state = 1, action) {
	switch( action.type ) {
		case CHANGE_TAB:
			return action.tab;
		default:
			return state;
	}
}
function numbersReducer(state = [], action) {
	switch( action.type ) {
		case ADD_NUMBER:
			return [...state, action.number];
		default:
			return state;
	}
}
function pictureReducer(state = '', action) {
	return state;
}

function historyReducer(state = [], action) {
	switch( action.type ) {
		case HISTORY:
			return [...state, action.action];
		default:
			return state;
	}
} 

function productReducer(state = [], action) {
	/*switch( action.type ) {
		case ADD_PRODUCT:
			return [...state, action.product];
		default:
			return state;
	}*/
    return state;
}



export {tabReducer, numbersReducer, pictureReducer, historyReducer, productReducer};