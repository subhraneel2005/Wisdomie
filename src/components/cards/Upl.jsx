import React from 'react'

function Upl() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px] rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Playlists</h1>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLlHtucAD9KT2VKBwCZooIvDAiJQZ0Hrur&si=rLhoMiYpJGiF-lGb" target='blank'>Ansh Mehra</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLjiHFwhbHYlHSpAflJwjsKAyMaMhASm0F&si=4QHqig9b1ry2FQeq" target='blank'>DesignWithArash</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLW-zSkCnZ-gBtmXf9AfRbA90GnBv7o2gS&si=gGK54fCUtupoxGNK" target='blank'>GFX Mentor</a></div>
        </div>
    </div>
  )
}

export default Upl