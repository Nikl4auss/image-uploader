function Uploader() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <p className="self-start justify-self-start text-xl text-gray-300">Uploading...</p>
      <div className="w-full h-3 rounded-2xl bg-gray-700 relative">
        <div className="absolute left-0 bg-cyan-600 w-1/4 h-full rounded-2xl slide"></div>
      </div>
    </div>
  )
}

export default Uploader
