import React from 'react'

interface imageProps {
    src:string,
    className?:string,
    clickable?:boolean
}

const Image: React.FC<imageProps> = ({src,className,clickable}) => {
  return (
    <div className='w-auto h-auto'>
        <img src={src} alt="" className={`${
            className
        } ${clickable ? 'cursor-pointer' : ''}`}  />
    </div>
  )
}

export default Image