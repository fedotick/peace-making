import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from "../redux/features/post/postSlice"
import addImageIcon from '../img/icons/add-image.svg'

export const AddPostPage = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = () => {
        try {
            const data = new FormData()
            data.append('title', title)
            data.append('text', text)
            data.append('image', image)
            dispatch(createPost(data))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const clearFormHandler = () => {
        setText('')
        setTitle('')
    }

    return (
        <form 
            className="w-1/3 flex flex-col mx-auto mt-10 p-10 border border-gray rounded-md"
            onSubmit={e => e.preventDefault()}    
        >
            <div className="flex object-cover py-2">
                {image && (
                    <img src={URL.createObjectURL(image)} alt={image.name} />
                )}
            </div>
            <div className="flex flex-col gap-y-5">
                <label className="text-lg">
                    <h4 className="font-semibold">Post Title</h4>
                    <input 
                        type="text" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-2 text-black w-full rounded-lg bg-gray-400 border p-[10px] text-xs outline-none placeholder:text-gray-700"
                        placeholder="Title"
                    />
                </label>
                <label className="text-lg">
                <h4 className="font-semibold">Post Text</h4>
                    <textarea 
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className="mt-2 text-black w-full rounded-lg bg-gray-400 border p-[10px] text-xs outline-none resize-none h-40 placeholder:text-gray-700"
                        placeholder="Текст поста"
                    />
                </label>
            </div>
            
            <div className="flex items-center justify-between mt-4">
                <label className="py-3 px-5 bg-blue font-semibold text-sm justify-center rounded-md cursor-pointer hover:bg-[#416b9c] transition-all duration-300">
                    <div className="flex gap-x-1">
                        <img src={addImageIcon} alt="Add image" />
                        Add image
                    </div>
                    <input 
                        type="file" 
                        className="hidden" 
                        onChange={e => setImage(e.target.files[0])} 
                    />
                </label>
                <div className="flex gap-x-5">
                    <button 
                        className="flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4"
                        onClick={clearFormHandler}
                    >
                        Отменить
                    </button>   
                    <button 
                        className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4"
                        onClick={submitHandler}
                    >
                        Добавить пост
                    </button>
                </div>
            </div>
        </form>
    )
}
