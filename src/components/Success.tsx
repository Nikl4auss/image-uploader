import { MdCheckCircle } from 'react-icons/md'
import { MdCopyAll } from 'react-icons/md'
function Success({ url }: {
  url: string
}) {
  async function copyToClipboard() {
    await navigator.clipboard.writeText(url)
    console.log('Copied')
  }
  return (
    <>
      <MdCheckCircle color='#15803d' size="3rem" />
      <p className='text-gray-200 text-2xl'>Uploaded Succesfully!</p>
      <div className='h-[20rem] w-[90%] rounded-2xl'>
        <img src={url} className='min-w-full h-full rounded-xl' />
      </div>
      <div className='w-[90%] flex items-center justify-center gap-2'>
        <div className='bg-slate-400 rounded p-2 overflow-hidden w-[80%]'>
          <p className='text-sm overflow-hidden overflow-ellipsis whitespace-nowrap'>{url}</p>
        </div>
        <button onClick={copyToClipboard} className='w-[20%] bg-sky-800 hover:bg-sky-600 p-2 rounded flex items-center justify-center'>
          <MdCopyAll className='text-xl text-center text-gray-200 hover:text-gray-400' />
        </button>
      </div>
    </>
  )
}

export default Success
