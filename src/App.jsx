import React from 'react';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Navbara from './components/Navbara';
import Mern from './components/Mern';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import UiUx from './components/UiUx';
import Cybersecurity from './components/Cybersecurity';
import Devops from './components/Devops';
import MachineLearning from './components/MachineLearning';
import Dsa from './components/Dsa';
import Web3 from './components/Web3';

function App() {
  return (
    <motion.div>
      <BrowserRouter>
        <Navbara/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/mern stack' element={<Mern/>}></Route>
            <Route path='/frontend' element={<Frontend/>}></Route>
            <Route path='/backend' element={<Backend/>}></Route>
            <Route path='/uiux' element={<UiUx/>}></Route>
            <Route path='/cybersecurity' element={<Cybersecurity/>}></Route>
            <Route path='/devops' element={<Devops/>}></Route>
            <Route path='/machine learning' element={<MachineLearning/>}></Route>
            <Route path='/dsa' element={<Dsa/>}></Route>
            <Route path='/web3' element={<Web3/>}></Route>
          </Routes>
      </BrowserRouter>
    </motion.div>
  )
}

export default App