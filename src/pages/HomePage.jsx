
import NoData from '../components/NoData'
import PostCard from '../components/PostCard'
import { usePost } from '../context/postContext'

const HomePage = () => {

  const { post } = usePost()
  
  return (
    <div>      
      
      {
        post.length === 0 ? (
          <NoData />
        ) : (
          <div className='grid grid-cols-2 gap-4'>
            {
              post.map(item => (
                <PostCard post={item} key={item._id} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default HomePage