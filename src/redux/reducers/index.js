import { combineReducers } from "redux";
import authReducer from "./authSlice.js";
import bookReducer from "./bookSlice.js";
import userReducer from "./userSlice.js";
import walletReducer from "./walletSlice.js";
import paymentReducer from "./paymentSlice.js";
import tagsReducer from "./tagsSlice.js";
import shelfReducer from "./shelfSlice.js";
import crReducer from "./crSlice.js";
import genresReducer from "./genresSlice.js";
import listingsReducer from "./listingsSlice.js";

export default combineReducers({
  auth: authReducer,
  book: bookReducer,
  user: userReducer,
  wallet: walletReducer,
  payment: paymentReducer,
  tags: tagsReducer,
  shelf: shelfReducer,
  cr: crReducer,
  genres: genresReducer,
  listings: listingsReducer,
});
