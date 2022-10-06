import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {picturesReducer} from "./slices/picture.slice";

const rootReducer = combineReducers({
    picturesReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
