import React, { useRef } from 'react'
import { motion } from  'framer-motion'
import Uyt from './cards/Uyt'
import Upl from './cards/Upl'

function UiUx() {
  const constraintsRef = useRef(null)
  return (
    <motion.div ref={constraintsRef} className='h-screen w-full bg-purple-500 flex justify-center items-center'>
      <div className='block md:flex'>
      <motion.div drag
      dragConstraints={constraintsRef}><Uyt/>
      </motion.div>
      <div className='text-[10vw] font-bold text-purple-800 select-none'>UI/UX</div>
      <motion.div drag
      dragConstraints={constraintsRef}><Upl/>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default UiUx