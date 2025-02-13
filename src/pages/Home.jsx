import React, { useContext, useEffect } from 'react'
import { SiWebmoney } from 'react-icons/si'
import Lottie, { LottiePlayer } from 'lottie-react'

import lottieanim from '../lottieanim.json'
import { PiShootingStarThin } from 'react-icons/pi'
import AppContext from '../context/AppContext'

const Home = () => {
    const {Val , setVal}= useContext(AppContext);
    console.log(Val,setVal)

    const handleStart = ()=>{
        setVal(!Val)
    }
    return (
        <>
            <nav className='h-[65px] w-full bg-[#181818] text-white flex items-center justify-between sm:px-12 px-5 border-b border-gray-900'>
                <div className='flex items-center justify-center gap-3'>
                    <SiWebmoney className='text-3xl' />
                    <h1 className='text-[19px] font-semibold'>Expense</h1>
                </div>
                <div className='h-full'>
                <button onClick={handleStart} className='border border-[#494949] text-[#a1a1a1] cursor-pointer text-[14px] w-[100px] py-1.5 mt-4 rounded hover:border-[white] hover:text-[white] hover:scale-[1.03] transition-all ease-initial flex items-center justify-center gap-2
                '>Start <PiShootingStarThin className='text-[20px]' />
                </button>
                </div>
                
            </nav>
            <div className='md:h-[89.5vh] h-max w-full bg-[#181818] ms:p-5 p-1'>

                <div className='h-[100%] w-full flex md:flex-row flex-col items-center md:-5 gap-1 text-white'>
                    <div className='h-full md:w-[70%] w-full md:ps-12 ps-8 py-5 flex flex-col gap-5 lg:pe-40 pe-0'>
                        <h1 className='font-sans md:text-6xl text-4xl tracking-[0.99px] font-semibold md:leading-18 leading-12 md:mt-12 mt-2'>Keep Your Expenses Organized in Just One Platform</h1>
                        <p className='md:pe-42 pe-5  font-sans font-extralight tracking-[1px] text-[#cacaca]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet optio iure nostrum soluta nam pariatur dignissimos et illo odio excepturi.</p>
                        <button onClick={handleStart} className='border border-[#494949] text-[#a1a1a1] cursor-pointer text-[14px] w-[170px] py-1.5 mt-4 rounded hover:border-[white] hover:text-[white] hover:scale-[1.03] transition-all ease-initial'>Let's Start</button>
                    </div>
                    <div>
                        
                    </div>
                    <div className='h-full md:w-[30%] w-full flex items-center justify-center md:pb-32 pb-0'>
                        <Lottie animationData={lottieanim} className='md:h-auto h-[250px] w-[450px]'/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
