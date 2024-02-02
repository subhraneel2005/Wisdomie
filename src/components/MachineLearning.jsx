import React, { useRef } from 'react'
import { motion } from  'framer-motion'
import MLyt from './cards/MLyt'
import MLpl from './cards/MLpl'

function MachineLearning() {
  const constraintsRef = useRef(null)
  return (
    <motion.div ref={constraintsRef} className='h-screen w-full bg-indigo-500 flex justify-center items-center'>
      <div className='block md:flex'>
      <motion.div drag
      dragConstraints={constraintsRef}><MLyt/>
      </motion.div>
      <div className='text-[10vw] font-bold text-indigo-800 select-none'>Machine Learning</div>
      <motion.div drag
      dragConstraints={constraintsRef}><MLpl/>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default MachineLearning