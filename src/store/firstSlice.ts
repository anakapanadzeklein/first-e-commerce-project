import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FirstState {
  value: number; 
}

const initialState: FirstState = {
  value: 1,
};

const firstSlice = createSlice({
  name: 'firstSlice', 
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = firstSlice.actions;
export default firstSlice.reducer;
