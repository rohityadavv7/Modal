import {AnimatePresence, motion} from "framer-motion"
import { useState } from 'react'
import './App.css'

function App() {

  const[open, setOpen] = useState(false)

  return (
    <div className='h-screen w-screen flex justify-center items-center relative'>
      <button className='text-2xl text-highlight font-semibold p-4 bg-black rounded-2xl'
      onClick={() => {setOpen((prev) => !prev)}}>
        Open Modal
      </button>

      <AnimatePresence>
        {
          open && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}}
            className='h-full w-full bg-gray-500 flex rounded-md bg-clip-padding bg-black
            backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 absolute items-center justify-center'>
              <motion.div initial={{ opacity:0, rotate:"20deg"}} animate={{ opacity:1, rotate:"0deg"}} 
              className='bg bg-[#b057e8] rounded-xl p-8 w-[40%] h-[40%] relative flex items-center justify-center'>
                <div className='text-2xl font-semibold text-white'>This is a modal</div>
                <button className="btn btn-circle btn-outline text-[5px] absolute top-2 right-2" onClick={()=> {setOpen((prev) => !prev)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </motion.div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default App
