import React from 'react'
import Image from '../Image/Image'

interface buttonInterface {
    name: string,
    icon?: string,
    onClick?: () => void,
    buttonCss?: string,
    nameCss?:string,
    iconCss?:string,
}


const Button: React.FC<buttonInterface> = ({name,icon,onClick,buttonCss,nameCss,iconCss}) => {
  return (
    <div>
        <button onClick={onClick && onClick} className={`${buttonCss} flex items-center justify-center gap-3`}>
            <span className={`${nameCss}`}>{name}</span>
            {
                 icon && <Image src={icon} className={`${iconCss}`} />
            }
        </button>
    </div>
  )
}

export default Button