
import { useEffect } from 'react'
import NoData from '../components/NoData'
import PostCard from '../components/PostCard'
import { usePost } from '../context/postContext'

const HomePage = () => {

  const { post } = usePost()
  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }
  
  return (
    <div>      
      
      {
        post.length === 0 ? (
          <NoData />
        ) : (
          <div className='grid grid-cols-2 gap-4'>
            {
              post.map(item => (
                <PostCard post={item} key={item._id || generarId()} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default HomePage