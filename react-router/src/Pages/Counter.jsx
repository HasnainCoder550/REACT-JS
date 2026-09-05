import React, { useReducer } from 'react'

const Counter = () => {
    
    const initialData = {
       count : 0
    }
//     const reducerFn = (state,action) => {
//         console.log(action,state);
        
//         if(action.type == "increment"){
//              return state  = state + 1
//         }
//          if(action.type == "decrement"){
//             return state = state -1
//          }
         
//          if(action.type == "reset"){
//             return state = 0
//          }
 


//         return state
//   }

const reducerFn = (state,action) => {
    console.log(state,action);
    
    switch(action.type) {
   case "increment" :
    return {...state , count : state.count + 1}
    // console.log("Chala");
    
    
    }
}
   
  const [state, dispatch] = useReducer(reducerFn, initialData);
    return (
        <div>
            Count : {state.count }


            <div>
                <button onClick={() => dispatch({type : "decrement"})}>Decrement</button>
                <button onClick={() => dispatch({type : "increment"})}>Increment</button>
                <button onClick={() => dispatch({type : "reset"})}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
