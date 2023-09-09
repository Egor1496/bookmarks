import { useState } from 'react';

import sass from "./Counter.module.sass";

import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import { BaseButton } from '../../../shared/ui';
import {
  decrement,
  increment,
  clearCounter,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
} from '../model/counterSlice';

export const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={sass.main}>
      <div className={sass.inner}>
        <BaseButton callBack={() => dispatch(decrement())}>-</BaseButton>
        <span >{count}</span>
        <BaseButton callBack={() => dispatch(increment())}>+</BaseButton>
      </div>
      <div className={sass.inner}>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <BaseButton callBack={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</BaseButton>
        <BaseButton callBack={() => dispatch(incrementAsync(incrementValue))}>Add Async</BaseButton>
        <BaseButton callBack={() => dispatch(incrementIfOdd(incrementValue))}>Add If Odd</BaseButton>
        <BaseButton callBack={() => dispatch(clearCounter())}>Clear</BaseButton>
      </div>
    </div>
  );
}
