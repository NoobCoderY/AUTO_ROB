import React from 'react'

const Card_1 = ({title,title_des}) => {
    console.log(title);
  return (
    <div className='card'>
           <h1>{title}</h1>
           <h2>
            {title_des}
           </h2>
    </div>
  )
}

export default Card_1