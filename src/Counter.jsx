import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,incrementByAmount } from './store/counterSlice';
import { useState } from 'react';

function Counter() {
    const [number,setNumber]=useState()
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const incrementBy = (amount) => {
    dispatch(incrementByAmount(parseInt(amount)))
  }

  return (
    <div>
      <div className='flex flex-col items-center w-1/4 m-auto mt-10'>
        <button
        className='px-3 py-2 rounded bg-blue-500 text-white'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button><br />
        <span className='text-xl my-2'>{count}</span><br />
        <button
                className='px-3 py-2 rounded bg-blue-500 text-white'

          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button><br />
        <input type='number'
        placeholder='Enter Number'
        onChange={(e)=>setNumber(e.target.value)}
        value={number}
        className='px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500'
        /> <br />
        <button
                className='px-3 py-2 rounded bg-blue-500 text-white'

          aria-label="Increment value"
          onClick={() => incrementBy(number)}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default Counter