import React from 'react'

function Title({Title1, Title2,Title3}) {
  return (
        <div className="text-center mb-8 sm:mb-12 -mt-20 sm:-mt-15">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl tracking-tighter font-bold font-sans  mb-2">
            <div className='flex space-x-2 md:space-x-3 justify-center'>
          <p className='text-chart-3'>{Title1}</p>    <p className=' text-foreground'>{Title2}</p> <p className=' text-foreground'>{Title3}</p>
          </div>
         
          </h2>
          
        </div>
  )
}

export default Title