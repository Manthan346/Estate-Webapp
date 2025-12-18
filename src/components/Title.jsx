import React from 'react'

function Title({Title1, Title2}) {
  return (
        <div className="text-center mb-8 sm:mb-12 -mt-20 sm:-mt-15">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans  mb-2">
            <div className='flex space-x-4 justify-center'>
          <p className='text-chart-3'>{Title1}</p>    <p className='text-foreground'>{Title2}</p>
          </div>
         
          </h2>
          
        </div>
  )
}

export default Title