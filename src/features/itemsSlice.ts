// itemsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Articulo from '../constants/Articulo';

interface ItemsState {
  items: Articulo[];
}

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Articulo>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.codigo !== action.payload);
    },
    removeAllItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, removeAllItems } = itemsSlice.actions;

export default itemsSlice.reducer;
