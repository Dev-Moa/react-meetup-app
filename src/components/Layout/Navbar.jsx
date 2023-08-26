import React from 'react'
import { Link } from 'react-router-dom'
import useFavStore from '../../store/FavStore'

function Navbar() {

    const favs = useFavStore((state) => state.Favs)

    return (
        <div className='px-[15%]   py-[2%] bg-red-800 text-white flex justify-between items-center'>
            <h1 className='font-bold'> <Link to='/' >React Meetup</Link> </h1>
            <ul className='flex gap-5 items-center'>
                <li> <Link to='/' >All Meetup</Link></li>
                <li><Link to='new' >New Meetup</Link></li>
                {favs.length === 0 ? (<li><Link to='favs' >Favorite -0</Link></li>) : (<li><Link to='favs' >Favorite</Link></li>)}

            </ul>
        </div>
    )
}

export default Navbar