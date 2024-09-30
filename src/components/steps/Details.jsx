import { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'

export default function Details() {
  const {userData, setUserdata} = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value} = e.target
    setUserdata({ ...userData, [name]: value})
  }

  return <div className='flex flex-col'>
      <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
            Address
          </div>

          <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
                onChange={handleChange}
                name='address'
                type='text'
                placeholder='Address'
                className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                required
            />
            </div>
      </div>

      <div className='w-full mx-2 flex-1'>
          <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
            City
          </div>
          <div className='bg-white my-2 p-1 flex border border-gray-200rounded'>
            <input 
              type='text' 
              onChange={handleChange} 
              name='city' 
              placeholder='City' 
              className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              required
            />
          </div>
      </div>
    </div>

}
