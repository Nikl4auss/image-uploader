import { DragEvent, useEffect, useState } from "react"
import { imageValidator } from "../utils/imageValidator"

function FileUploader({ upload, handleError }: {
  upload: any,
  handleError: any,
}) {
  const [file, setFile] = useState<any>({})
  function dragEnterHandler(event: DragEvent) {
    event.currentTarget.classList.add('border-cyan-500', 'bg-slate-600')
  }

  function dragLeaveHandler(event: DragEvent) {
    event.currentTarget.classList.remove('border-cyan-500', 'bg-slate-600')
  }

  function dragOverHandler(event: DragEvent) {
    event.preventDefault()
  }

  function dropHandler(event: DragEvent) {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (!imageValidator(file)) {
      console.log(file.type)
      console.log(handleError)
      handleError({
        message: 'The image must be Jpeg, Png or svg',
        type: 'INVALID_FILE'
      })
    }
    else {
      setFile(file)
    }
  }

  useEffect(() => {
    if (file.name) {
      upload(file)
    }
  }, [file])
  return (
    <>
      <header className='flex flex-col gap-2 items-center justify-center text-center'>
        <h1 className='text-2xl text-gray-300'>Upload your image</h1>
        <p className='text-sm text-gray-400'>File should be Jpeg, Png, ...</p>
      </header>
      <div id='file-uploader'
        className='
      w-[90%]
      p-36
      rounded border-2 border-gray-500 border-dashed hover:border-cyan-500
      bg-slate-700 hover:bg-slate-600 
      relative'
        onDragOver={dragOverHandler}
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
      >
        <p className='text-gray-500 absolute top-3/4 left-2/4 -translate-x-2/4'>Drag & Drop your image here</p>
      </div>

      <p className='text-xl text-gray-300'>Or</p>
      <label htmlFor="uploadButton" className='text-xl text-gray-100 p-4 bg-cyan-600 hover:bg-cyan-500 rounded-xl'>Choose a file</label>
      <input
        id='uploadButton'
        type="file"
        className='invisible'
        onChange={(event) => {
          //@ts-ignore
          const [file] = event.currentTarget.files
          if (file) {
            if (!imageValidator(file)) {
              handleError({
                message: 'The image must be Jpeg, Png or svg',
                type: 'INVALID_FILE'
              })
            }
            else {
              setFile(file)
            }
          }
        }}
      />
    </>
  )
}

export default FileUploader
