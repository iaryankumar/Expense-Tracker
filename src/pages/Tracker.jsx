import React, { useContext, useState } from 'react'
import { IoIosAdd } from 'react-icons/io'
import { MdAccessTime, MdNoAdultContent, MdOutlineDelete } from 'react-icons/md'
import { PiShootingStarThin } from 'react-icons/pi'
import { SiWebmoney } from 'react-icons/si'
import Modal from '../components/Modal'
import AppContext from '../context/AppContext'

const Tracker = () => {
  const [modal,setModal]=useState(false)
  const data = useContext(AppContext).data ; 
  const setData = useContext(AppContext).setData;

const remove = (e,i)=>{
let copyArr = [...data]
copyArr.splice(i,1)
setData(copyArr)
}
  
  return (
    <>
      <nav className='h-[65px] w-full bg-[black] text-white flex items-center justify-between sm:px-12 px-5  border-gray-900 sticky top-0'>
        <div className='flex items-center justify-center gap-3'>
          <SiWebmoney className='text-3xl' />
          <h1 className='text-[19px] font-semibold'>Expense</h1>
        </div>
        <div className='h-full'>
          <button onClick={()=>setModal(!modal)} className='border border-[#494949] text-[#a1a1a1] cursor-pointer text-[14px] sm:w-[160px] w-[110px] py-1.5 mt-4 rounded hover:border-[white] hover:text-[white] hover:scale-[1.03] transition-all ease-initial flex items-center justify-center sm:gap-2 gap-0.5 p-1'> <IoIosAdd className='text-sm:[20px] text-[17px]' /> Add Expense</button>
        </div>

      </nav>

      <div className='min-h-[calc(100vh-65px)] max-h-max w-full bg-[black]'>
        <div className=' grid lg:grid-cols-2 grid-cols-1 sm:pt-12 pt-5 justify-items-center m-auto w-max lg:gap-x-12 lg:gap-y-5 gap-2 '>
          
        {  
          data.map((ele,i)=>{
            return <div key={i} className='h-max w-max bg-[#f7f7f7] rounded-2xl flex items-center gap-2 py-1.5 sm:px-5 px-2'>
            <div className='h-[80px] w-[50px] bg-[#181818] rounded-2xl flex flex-col items-center justify-center  text-white'>
              <h1 className='text-[18px] font-extrabold'>{ele.expenseDate}</h1>
              <h1 className='text-[15px]'>{ele.expenseMonth}</h1>
            </div>
            <div className=' sm:w-max w-[130px] flex flex-col justify-center items-start ml-2'>
              <h1 className='font-semibold text-gray-800'>{ele.expenseName}</h1>
              <p className='text-[14px] text-gray-600 tracking-[0.5px]'>You spend ₹{ele.expensePrice} on {ele.expenseName}</p>
            </div>
            <div onClick={()=>remove(ele,i)} className='md:w-[50px] sm:w-[35px] w-[30px] md:h-[50px] sm:h-[35px] h-[30px] cursor-pointer bg-red-700 ml-8 rounded-full flex items-center justify-center text-white'>
              <MdOutlineDelete className='sm:text-xl' />
            </div>
          </div>
          })
        }
          
          {/* {
            !data.lenght ? <div className='text-[#9c9c9c]'><h1 className='text-3xl font-semibold mt-48 text-center'>Add Expense</h1><p className='text-center text-[14px] mt-2'>Sorry No Data Found!</p></div>  :


          } */}
            
          
        </div>
      </div>
      {
        modal &&  <Modal data = {{modal , setModal}}/>
      }

       


    </>
  )
}

export default Tracker
