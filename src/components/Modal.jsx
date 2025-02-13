import React, { useContext, useRef } from 'react'
import AppContext from '../context/AppContext'

const Modal = (props) => {
  const {data , setData} = useContext(AppContext);
  const expenseRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const today = new Date();
  const date = today.getDate();
  const month = today.toLocaleString('en-US', { month: 'long' }).slice(0,3).toUpperCase()

  const handleSubmit= (e)=>{
    e.preventDefault();

    let obj = {
      expenseName: expenseRef.current.value,
      expensePrice: priceRef.current.value,
      expenseDes: descriptionRef.current.value,
      expenseDate : date ,
      expenseMonth : month ,
    }
    let  dataCopy = [...data , obj]
    setData(dataCopy)
    props.data.setModal(!props.data.modal)
  }


  return (
    <>
    
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
  <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
    <div className="flex items-center">
      <h3 className="text-gray-700 sm:text-xl text-[18px] font-bold flex-1">Add New Product</h3>
      <svg onClick={()=>props.data.setModal(!props.data.modal)} xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500" viewBox="0 0 320.591 320.591">
        <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
        <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
      </svg>
    </div>
    <form onSubmit={handleSubmit} className="space-y-4 mt-8">
      <div className='border border-[gray] px-3 py-1.5 rounded'>
        <input ref={expenseRef} type="text" placeholder='Enter Expense Name' className='text-[14px] outline-none flex-1 w-full' required />
      </div>
      <div className='border border-[gray] px-3 py-1.5 rounded'>
        <input ref={priceRef} type="number" placeholder='Expense in Rupee' className='text-[14px] outline-none flex-1 w-full' required />
      </div>
      <div className='border border-[gray] px-3 py-1.5 rounded'>
        <input ref={descriptionRef} type="text" placeholder='Enter description' className='text-[14px] outline-none flex-1 w-full' />
      </div>
      <div className="flex justify-end gap-4 !mt-8">
        <button onClick={()=>props.data.setModal(!props.data.modal)} type="button" className="px-6 py-3 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300">Cancel</button>
        <button  type="submit" className="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-gray-950 hover:bg-blue-700">Submit</button>
      </div>
    </form>
  </div>
</div>


    </>
  )
}

export default Modal
