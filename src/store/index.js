import { configureStore } from '@reduxjs/toolkit';
import appSlice from './app-slice';
import uiSlice from './ui-slice';


const store = configureStore({
    reducer: {ui: uiSlice, app: appSlice}
})

export default store;