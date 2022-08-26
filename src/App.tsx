import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import FileUploader from './components/FileUploader'
import axios from 'axios'
import Box from './components/Box'
import Uploader from './components/Uploader'
import Success from './components/Success'
function App() {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState({
    message: '',
    type: ''
  })
  const [url, setUrl] = useState('')

  async function uploadImage(file: File) {
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'eusy6mqp')
    try {
      const { data } = await axios.post('https://api.cloudinary.com/v1_1/nikl4auss-images/image/upload', formData)
      const { secure_url } = data
      setUrl(secure_url)
      setUploading(false)
    }
    catch (e) {
      setUploading(false)
      handleError({
        message: 'The image couldn\'t be uploaded',
        type: 'UPLOAD_ERROR'
      })
    }
  }

  function handleError(error) {
    console.log('here')
    setError(error)
    setTimeout(() => {
      setError({
        message: '',
        type: ''
      })
    }, 5000)
  }
  return (
    <main className='w-full flex flex-col justify-center items-center font-["Poppins"] relative'>
      {error.message
        ? <p className='bg-red-500 p-2 absolute top-0'>{error.message}</p>
        : null
      }
      <Box>
        {
          url
            ? <Success url={url} />
            : uploading
              ? <Uploader />
              : <FileUploader upload={uploadImage} handleError={(error) => handleError(error)} />
        }
      </Box>

    </main>
  )
}

export default App
