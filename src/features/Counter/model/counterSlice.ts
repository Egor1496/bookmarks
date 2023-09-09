import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../../app/store';

import { fetchCount } from './counterAPI';

type CounterState = {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

// Приведенная ниже функция называется thunk и позволяет нам выполнять асинх. логику. Это
// может быть отправлено как обычное action: `dispatch(incrementAsync(10))`. Этот
// вызовет thunk с функцией `dispatch` в качестве первого аргумента. Асинх.
// код может быть выполнен и могут быть отправлены другие actions.
// обычно используется для выполнения асинхронных запросов.

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount', // !=/
  async (amount: number) => {
    const response = await fetchCount(amount);

    // Возвращаемое нами значение становится `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    clearCounter: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },

  // Поле `extraReducers` позволяет срезу обрабатывать действия, определенные в другом месте,
  // включая действия, сгенерированные createAsyncThunk или в других фрагментах.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement, clearCounter, incrementByAmount } = counterSlice.actions;

// Мы также можем написать thunks вручную, которые могут содержать как синх, так и асинх. логику.
// Вот пример условной диспетчеризации действий на основе текущего состояния.*/
export const incrementIfOdd = (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = getState().counter.value;
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default counterSlice.reducer;
