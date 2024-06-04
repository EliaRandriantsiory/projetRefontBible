import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice'; // Importez le réducteur
import bokyReducer from './mizahaReducer';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
      boky: bokyReducer, // Ajoutez le réducteur auth à votre magasin
      auth: authSlice
    },
  });
export default store;