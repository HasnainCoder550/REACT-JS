// import React, { useEffect } from 'react'
// import UserCard from './components/userCard'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllUsersStart, getAllUsersSuccess, getAllUsersThunk } from './featues/users/users'
// import axios from 'axios'




// const App = () => {
// let {users,loading} = useSelector(state => state.user);
// console.log(users);

// const dispatch = useDispatch()


// const getUserData = async () => {
// dispatch(getAllUsersThunk())
// }

//   useEffect(() => {
//     getUserData()
//   },[])
//   return (
//     <div className='bg-[#2a2a2a] h-auto w-full text-white '>
//       <h1 className='text-center text-4xl mono mb-10 pt-3 font-semibold'>All Users</h1>

//       <div className='flex flex-wrap justify-around'>
//       {users && users?.slice(0,100)?.map((u,idx) => <UserCard key={idx} user={u}/>)}
//       </div>
//     </div>
//   )
// }

// export default App



import React, { memo, useCallback, useMemo, useState } from 'react'

const App = () => {

  const [state, setState] = useState(true)
  const [count, setCount] = useState(0);

 let user = useMemo(() => {
    return {
    name : "hasan ashraf"
  }
  }, [])


  const foo = useCallback(() => {
    console.log("log ker raha hon..");
    
  } , [])

  console.log("app component chalaa -->");
  
  return (
    <>
    <div>App</div>

<button onClick={() => setState(!state)}>update state</button>
<button onClick={() => setCount(count + 1)}>update count</button>

<br />
    <Home handler={foo} data={user} />
    <About />
    </>
  )
}

export default App




const Home = memo(( ) => {

  console.log("home component chalaa -->");

  // for(let i = 0 ; i < 100000; i++){
  //   console.log(i);
    
  // }
  
  return (
    <>Home</>
  )
})


const About =( ) => {

  console.log("About component chalaa -->");
  
  return (
    <>About</>
  )
}