import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../redux/features/post/postSlice'
import { PostItem } from '../components/PostItem'

export const MainPage = () => {
    const { posts } = useSelector(state => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if (!posts.length) {
        return (
            <div className='text-xl text-center py-10'>
                Posts haven't been created yet
            </div>
        )
    }

    return (
        <div className='max-w-[900px] mx-auto py-10'>
            <div className='flex justify-between gap-8'>
                <div className='flex flex-col gap-10 basis-4/5'>
                    {posts?.map((post, index) => (
                        <PostItem post={post} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
