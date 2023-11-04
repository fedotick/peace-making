import React from 'react'
import { Link } from 'react-router-dom'

export const PostItem = ({ post }) => {
    return (
        <Link to={`/${post._id}`}>
            <div className='flex flex-col basis-1/4 flex-grow'>
                
            </div>
        </Link>
    )
}
