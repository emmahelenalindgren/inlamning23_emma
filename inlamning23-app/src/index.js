import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, numbersReducer, pictureReducer, historyReducer, productReducer, imageReducer, priceReducer } from './reducers/reducers.js';



let initialState = {
	tab: 1,  // 1=väder, 2=tal
	imageUrl: 'http://www.gexing.me/uploads/allimg/141016/23040SH4-0.jpg',
	numbers: [2, 4, 8, 16, 32, 64],
    history: [{type: "test"}],
    products: [
        {
            name: "katt",
            image: <img src="https://media.fabfab.net/images/products/small/81_1172_002.jpg"/>,
            price: 49
        },
        {
            name: "Hund",
            image: <img src="https://lh6.googleusercontent.com/-TypA1_RPKUc/AAAAAAAAAAI/AAAAAAAAAEs/prA_5TO5iEc/photo.jpg?sz=50"/>,
            price: 349
        },
        {
            name: "kanin",
            image: <img src="https://68.media.tumblr.com/avatar_d716b765ecac_128.png"/>,
            price: 649
        }
    ]
}


let rootReducer = combineReducers({
	tab: tabReducer,
	numbers: numbersReducer,
	imageUrl: pictureReducer,
    history: historyReducer,
    products: productReducer
});

const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();