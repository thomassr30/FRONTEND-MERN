import {usePost} from '../context/postContext'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'


const PostForm = () => {

  const {createPost, getPostWithId, updatePost} = usePost()
  const navigate = useNavigate()
  const params = useParams()
  const [post, setpost] = useState({
    title: '',
    description: ''
  })
  
  useEffect(() => {
    (async()=>{
      if(params.id){
        const data = await getPostWithId(params.id)
        setpost(data)
      }
    })()
  }, [])
  

  return (
    <div className='flex justify-center'>
      <div className='card w-96 bg-gray-100 shadow-xl p-12'>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required('El titulo es requerido'),
            description: Yup.string().required('La descripción es requerida')
          })}
          onSubmit={async (values, actions)=> {
            
            if(params.id){
              await updatePost(params.id, values)
            }else{
              await createPost(values)
            }

            navigate('/')
          }}
          enableReinitialize={true}
        >
          {
            ({handleSubmit}) => (
              <Form onSubmit={handleSubmit}>
                <label htmlFor="title" className='text-sm block font-bold uppercase'>Titulo</label>
                <Field name='title' placeholder="Titulo" 
                  className='px-3 py-2 mt-2 mb-4 focus:outline-none rounded-xl bg-gray-200 w-full
                  text-gray-800'
                />
                <label htmlFor="descripcion" className='text-sm block font-bold uppercase'>Descripción</label>
                <Field component="textarea" name='description' placeholder="Descripción" 
                  className='px-3 py-2 mt-2 mb-4 focus:outline-none rounded-xl bg-gray-200 w-full
                  text-gray-800 resize-none'
                  row={3}
                />
                <button
                  type='submit'
                  className='btn btn-primary btn-block px-4 py-2 uppercase rounded-md text-white disabled:btn'
                >
                  Guardar
                </button>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

export default PostForm