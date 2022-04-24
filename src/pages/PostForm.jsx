import {usePost} from '../context/postContext'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'


const PostForm = () => {

  const {createPost} = usePost()
  const navigate = useNavigate()

  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        validationSchema={Yup.object({
          title: Yup.string().required('El titulo es requerido'),
          description: Yup.string().required('La descripción es requerida')
        })}
        onSubmit={async (values, actions)=> {
          await createPost(values)
          navigate('/')
        }}
      >
        {
          ({handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
              <Field name='title' placeholder="Titulo" 
                className='px-3 my-4 py-2 focus:outline-none rounded-xl bg-gray-200 w-full'
              />
              <Field name='description' placeholder="Descripción" 
                className='px-3 py-2 focus:outline-none rounded-xl bg-gray-200 w-full'
              />
              <button
                type='submit'
              >
                Guardar
              </button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default PostForm