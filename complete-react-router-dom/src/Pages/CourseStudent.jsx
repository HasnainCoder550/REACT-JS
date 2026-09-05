import React from 'react'

const CourseStudent = () => {

    let arr = ["Hasan" , "Hasnain" , "Abdullah" , "Saleem" , "Nadeem" , "Naeem"]
  return (
    <div>
      Course Student ...
      <ul>
        {arr.map((stud) => <li>{stud}</li>)}
      </ul>
    </div>
  )
}

export default CourseStudent
