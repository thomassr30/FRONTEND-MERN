import {HomePage,NotFoundPage,PostForm} from './pages/index'
import {Routes, Route,Link} from 'react-router-dom'
import { PostProvider } from './context/postContext'
import {Toaster} from 'react-hot-toast'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-neutral-900 min-h-screen flex items-center'>
        <div className='px-10 container m-auto'>
          <PostProvider>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/new' element={<PostForm/>} />
              <Route path='*' element={<NotFoundPage/>} />
            </Routes>
            <Toaster />
          </PostProvider>
        </div>
      </div>
    </div>
  )
}

export default App