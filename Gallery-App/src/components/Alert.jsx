import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Alert = ({isOpen , onClose}) => {
    // 1. Setup state to track if the alert is visible

    if (!isOpen) return null;
  return (
    <div className='h-screen w-full bg-white/20 absolute flex items-center justify-center '>
       <div className='h-[250px] w-[570px]  bg-white rounded-lg shadow-xl'>
        <div className=''>
          <div className='flex p-3 justify-between items-center'>
            <h1 className='pl-3 italic text-xl italic' 
 >How To Use It?</h1>
            <FontAwesomeIcon icon={faXmark} color="#e74c3c" size="lg" onClick={onClose} className='cursor-pointer'/>
          </div>
          <hr />
          <div className='pl-1 pr-1 mt-2'>
            <p className='p-1 w-full italic text-center leading-relaxed'>For Using the Gallery Application you must know what the footer is.Now look at bottom of your website and you'll see footer and you have two option like page changing and also Quantity/Limit of Your Photos/Pic. Please Rate Us and Also Visit Our Github For More Exciting and Interacive Projects. Thanks for Your Cooperation.  </p>
          </div>
        </div>
       </div>
        </div>
  )
}

export default Alert
