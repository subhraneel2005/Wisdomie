import React from 'react'

function YtCards() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px]  rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Videos</h1>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/MdG0Vw9f1A4?si=TwQ1bELoX-YVj191" target='blank'>KnowledgeGATE by Sanchit Sir</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/9kQ1JUDleWg?si=xQYnhZkf3ZlY4K4l" target='blank'>Love Babbar</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/GOa4UuFMliY?si=BemuuacVVnzOfMwz" target='blank'>Rohit Negi</a></div>
        </div>
    </div>
  )
}

export default YtCards