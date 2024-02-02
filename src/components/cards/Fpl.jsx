import React from 'react'

function Fpl() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px] rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Playlists</h1>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-&si=vWByiLCZL3WnWocQ" target='blank'>Sheriyans Coding School</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLWKjhJtqVAbmMuZ3saqRIBimAKIMYkt0E&si=IBdnXnK_mX_p-16w" target='blank'>Free Code Camp</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&si=nTaJMrqILYee6PCw" target='blank'>Code With Harry</a></div>
        </div>
    </div>
  )
}

export default Fpl