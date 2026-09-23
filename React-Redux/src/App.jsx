import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slices/counter';

const App = () => {
const dispatch = useDispatch();
const count = useSelector((state) => state.counter.value)


  return (
    <div>
     Counter Applicaton {count}


     <div>
      <button onClick={() => {dispatch(increment())}}>Increment</button>
      <button onClick={() => {dispatch(decrement())}}>Decrement</button>
      <button onClick={() => {dispatch(reset())}}>Reset</button>
     </div>
    </div>
  )
}

export default App
