import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosAddCircleOutline} from 'react-icons/io'

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 my-3 w-full rounded-full">
        <div className="flex-1">
            <Link to='/' className="btn btn-ghost normal-case text-xl ml-12">Tareas</Link>
        </div>
        <div className="flex-none">
            <Link to='/new' className="btn btn-square btn-ghost mr-12">
                <IoIosAddCircleOutline className='text-white w-6 h-6'/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar