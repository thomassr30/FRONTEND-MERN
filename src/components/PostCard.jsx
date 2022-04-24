import React from 'react'
import {FaEdit,FaTrashAlt} from 'react-icons/fa'
import toast from 'react-hot-toast'
import { usePost } from '../context/postContext'
import { useNavigate } from 'react-router-dom'

const PostCard = ({post}) => {

  const {deletePost} = usePost()

  const navigate = useNavigate()

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>¿Deseas eliminar tarea?</p>
        <div className='flex justify-between mt-6'>
        <button 
        className='btn'
        onClick={() => {
          deletePost(id);
          toast.dismiss(t.id)
        }}
        >
          Si
          </button>
        <button 
        className='btn'
        onClick={() => toast.dismiss(t.id)}
        >
          No
        </button>
        </div>
      </div>
    ))
  }

  return (
    <div className="card w-96 bg-gray-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={post.image.url} alt="Shoes" className="rounded-full w-36 h-36 object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{post.title}</h2>
        <p className='overflow-ellipsis'>{post.description}</p>
        <div className="card-actions">
          <button 
            className="btn btn-primary"
            onClick={() => navigate(`/post/${post._id}`)}
            >
            <FaEdit className='w-4 h-4'/>
          </button>

          <button 
          className="btn btn-primary"
          onClick={() => handleDelete(post._id)}
          >
            <FaTrashAlt className='w-4 h-4'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostCard