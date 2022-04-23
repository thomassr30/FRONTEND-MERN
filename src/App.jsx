import {HomePage,NotFoundPage,PostForm} from './pages/index'
import {Routes, Route} from 'react-router-dom'
import { PostContainer } from './context/postContext'

const App = () => {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10 container m-auto'>
        <PostContainer>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/new' element={<PostForm/>} />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
        </PostContainer>
      </div>
    </div>
  )
}

export default App