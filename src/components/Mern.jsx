import React, { useRef } from 'react'
import PlaylistCards from './PlaylistCards'
import { motion } from  'framer-motion'
import YtCards from './YtCards'

function Mern() {
  const constraintsRef = useRef(null)

  return (
    <motion.div ref={constraintsRef} className='h-screen w-full bg-lime-500 flex justify-center items-center'>
      <div className='block md:flex'>
      <motion.div drag
      dragConstraints={constraintsRef}><YtCards/>
      </motion.div>
      <div className='text-[10vw] font-bold text-lime-800 select-none'>MERN Stack</div>
      <motion.div drag
      dragConstraints={constraintsRef}><PlaylistCards/>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default Mern