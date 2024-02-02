import React, { useRef } from 'react'
import { motion } from  'framer-motion'
import Byt from './cards/Byt'
import Bpl from './cards/Bpl'

function Backend() {
  const constraintsRef = useRef(null)
  return (
    <motion.div ref={constraintsRef} className='h-screen w-full bg-yellow-500 flex justify-center items-center'>
      <div className='block md:flex'>
      <motion.div drag
      dragConstraints={constraintsRef}><Byt/>
      </motion.div>
      <div className='text-[10vw] font-bold text-yellow-800 select-none'>Backend</div>
      <motion.div drag
      dragConstraints={constraintsRef}><Bpl/>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default Backend