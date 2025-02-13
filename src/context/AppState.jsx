import React, { memo, useState } from 'react'
import AppContext from './AppContext'

const AppState = (props) => {

        const  [data,setData] =useState( JSON.parse(localStorage.getItem("ExpenseData")) ||[]);
        localStorage.setItem("ExpenseData" , JSON.stringify(data))
        const [Val, setVal] = useState( JSON.parse(localStorage.getItem("key")) || false );
        localStorage.setItem("key", JSON.stringify(Val))

  return (
    <AppContext.Provider value={{data , setData , Val ,setVal}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default memo(AppState) 
