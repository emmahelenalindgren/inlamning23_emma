import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'; 
import {tabReducer, numbersReducer, pictureReducer, historyReducer, productReducer, imageReducer, priceReducer, basketReducer } from './reducers/reducers.js';



let initialState = {
	tab: 1,  // 1=väder, 2=tal
	imageUrl: 'http://www.gexing.me/uploads/allimg/141016/23040SH4-0.jpg',
	numbers: [2, 4, 8, 16, 32, 64],
    history: [],
    products: [
        {
            name: "Katt",
            image: "https://uploads.scratch.mit.edu/users/avatars/1385/1878.png",
            price: 49
        },
        {
            name: "Hund",
            image: "https://pbs.twimg.com/profile_images/670332049522298880/N5uJZueS.jpg",
            price: 349
        },
        {
            name: "Anka",
            image: "https://yt3.ggpht.com/-liIoCo18ZuU/AAAAAAAAAAI/AAAAAAAAAAA/WDwQi24eMH4/s48-c-k-no-mo-rj-c0xffffff/photo.jpg",
            price: 649
        }
    ],
    basket: []
}


let rootReducer = combineReducers({
	tab: tabReducer,
	numbers: numbersReducer,
	imageUrl: pictureReducer,
    history: historyReducer,
    products: productReducer,
    basket: basketReducer
});

const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();