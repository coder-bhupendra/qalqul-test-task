import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import articleReducer from "./ArticlesSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "./Index";
import thunk from 'redux-thunk';


const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['articles', 'comments', 'user'] // add any slice that you want to persist here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)

);

let persistor = persistStore(store);

export { store, persistor };

// const store= configureStore({
//     reducer : {
//         articles: articleReducer
//       }
// })

export default store;