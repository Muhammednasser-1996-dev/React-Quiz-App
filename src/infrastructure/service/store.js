import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import reducers from "./../modules/AuthModule/service/redux/reducers";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "userState",
        "ResultState"
    ],
};

const persistedReducer = persistReducer(persistConfig, reducers);



const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export { store, persistor };
