
import { usePost } from '../context/postContext'

const HomePage = () => {

  const { post } = usePost()
  
  return (
    <div>
      <ul>
        {
          post.map(item => (
            <li key={item._id}>{item.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default HomePage