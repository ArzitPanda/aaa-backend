import React from 'react'

const CustomB = ({children}) => {
  return (
    <button type="button" className="bg-blue-600 w-64 hover:bg-gray-300 text-gray-100 font-bold py-2 px-4 rounded-l" > 
      {children}</button>  
  )
}

export default CustomB