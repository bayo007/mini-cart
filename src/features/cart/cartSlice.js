import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => { 
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []; //this is done using immer library
    },
    removeItem: (state, action) => { //
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId); //only itemId's not equal to the id of the item clicked should be returned
    },
    increase: (state, { payload }) => { // payload here is an object which is the id
      //from the State get the cartItem and find the item whose item id is equivalent to the payload.id, store it as cartitem, increase its amount by1
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1; //this amount is not the total amount 
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1; //amount of cartItems
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount; //amount for each item to be carted
        total += item.amount * item.price; // total aomunt is the summation of the product of each total amount(total amount of item gotten from above line) and its price
      });
      state.amount = amount;  //the state changes
      state.total = total; //the summation of prices changes
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action); //action is an object of data being fretched from the API given, returns amount,id,image,price,title
      state.isLoading = false;
      state.cartItems = action.payload; //this is the data that is being fetched, it has replaced the hard coded cartItems.js
    },
    [getCartItems.rejected]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions; //each one of them are the actions type with corresponding payloads

export default cartSlice.reducer;
