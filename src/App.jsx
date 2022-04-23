import {HomePage,NotFoundPage,PostForm} from './pages/index'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/new' element={<PostForm/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  )
}

export default App