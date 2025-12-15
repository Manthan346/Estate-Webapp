import React from 'react'

function Title({Title1}) {
  return (
        <div className="text-center mb-8 sm:mb-12 -mt-20 sm:-mt-15">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-foreground mb-2">
           {Title1}
          </h2>
          
        </div>
  )
}

export default Title