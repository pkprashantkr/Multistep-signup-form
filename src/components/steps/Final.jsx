import React from 'react'
import completed from '../../assets/completed.png'


const Final = () => {
  return (
    <div className='container md:mt-10'>
        <div className='flex flex-col items-center'>
            <div className='text-green-400'>
                <img src={completed} alt="completed" className='h-28 w-auto' />
            </div>
            <div className='mt-3 text-xl font-semibold uppercase'>
                Congratulations!
            </div>
            <div className='text-lg font-semibold text-gray-500 mt-1'>
                Your Account has been created...
            </div>
            <a className='mt-10' href="/">
                <button className='h-10 px-5 text-black-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-blue-500 hover:text-green-100'>
                    Close
                </button>
            </a>

        </div>
    </div>
  )
}

export default Final