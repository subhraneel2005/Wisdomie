import React from 'react'

function MLpl() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px] rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Playlists</h1>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLYwpaL_SFmcBhOEPwf5cFwqo5B-cP9G4P&si=a_4pdDDhwPYcLTj9" target='blank'>5 minutes Engineering</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLxCzCOWd7aiEXg5BV10k9THtjnS48yI-T&si=2MR9Ci3zVduU9LEi" target='blank'>Gate Smashers</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH&si=3AK67321p_Cmc1iF" target='blank'>CampusX</a></div>
        </div>
    </div>
  )
}

export default MLpl