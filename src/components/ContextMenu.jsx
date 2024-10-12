import React from 'react'
import { FcFullTrash, FcRefresh } from 'react-icons/fc';
import { LiaPencilAltSolid } from 'react-icons/lia';

const ContextMenu = ({x,y}) => {
  

    return (
    <div>
      <ul
          className="absolute bg-white shadow-lg p-2 rounded-md min-w-48 z-20 "
          style={{ top: y, left:x }}
        >

          <li className="p-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center">  <span>Düzəliş Et</span> <LiaPencilAltSolid /></li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center"><span>Təkrarla</span>  <FcRefresh /></li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center"> <span>Sil</span> <FcFullTrash />
          </li>
        </ul>
    </div>
  )
}

export default ContextMenu
