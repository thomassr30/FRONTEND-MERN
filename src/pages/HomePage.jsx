import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'
import { usePost } from '../context/postContext'

const HomePage = () => {

  const { post } = usePost()
  
  return (
    <div>
      
      <Link to='/new'>Crear nueva Tarea</Link>
      <div className='grid grid-cols-2 gap-4'>
        {
          post.map(item => (
            <PostCard post={item} key={item._id} />
          ))
        }
      </div>
        
    </div>
  )
}

export default HomePage