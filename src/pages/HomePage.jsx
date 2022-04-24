import { Link } from 'react-router-dom'
import { usePost } from '../context/postContext'

const HomePage = () => {

  const { post } = usePost()
  
  return (
    <div>
      <Link to='/new'>Crear nueva Tarea</Link>
      <ul>
        {
          post.map(item => (
            <li key={item._id || 1}>{item.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default HomePage