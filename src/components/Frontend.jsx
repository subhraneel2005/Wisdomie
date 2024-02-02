import React, { useRef } from 'react'
import { motion } from  'framer-motion'
import Fyt from './cards/Fyt'
import Fpl from './cards/Fpl'

function Frontend() {
  const constraintsRef = useRef(null)
  return (
    <motion.div ref={constraintsRef} className='h-screen w-full bg-sky-500 flex justify-center items-center'>
      <div className='block md:flex'>
      <motion.div drag
      dragConstraints={constraintsRef}><Fyt/>
      </motion.div>
      <div className='text-[10vw] font-bold text-sky-800 select-none'>Frontend</div>
      <motion.div drag
      dragConstraints={constraintsRef}><Fpl/>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default Frontend