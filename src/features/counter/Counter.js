import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <p>REACT REDUX</p>
        <button style={{marginRight: '30px'}}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          MENAMBAH NILAI
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          MENGURANGI NILAI
        </button>
      </div>
      <span>JUMLAH NILAI : {count}</span>
    </div>
  )
}