import { createStore , combineReducers } from "redux";
import ProductsReducer  from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer";
import HelpReducer from "./reducers/HelpReducer";
import RegisterReducer from "./reducers/RegisterReducer";
import AddressReducer from "./reducers/AddressReducer";
import WishlistReducer from "./reducers/WishlistReducer";
import DealReducer from './reducers/DealReducer';
import LatestReducer from "./reducers/LatestReducer";
import  selectedProductReducers  from "./reducers/ProductsReducer";

import { devToolsEnhancer } from 'redux-devtools-extension';

const root = combineReducers({
    ProductsReducer,
    CartReducer,
    HelpReducer,
    RegisterReducer,
    AddressReducer,
    WishlistReducer,
    DealReducer,
    LatestReducer,
    selectedProductReducers,
    
    
});

const store =createStore(root,devToolsEnhancer());

export default store;