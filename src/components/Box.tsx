import React from "react"

function Box({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className='w-[90%] max-w-[40rem] m-2 p-8 bg-slate-600 rounded-xl flex flex-col items-center justify-center gap-4 shadow-2xl'>
      {children}
    </div>
  )

}

export default Box
