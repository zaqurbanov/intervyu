import { useState } from 'react'

import './App.css'

import { NavLink, Route, Router, Routes } from 'react-router-dom'
import BankAccount from './pages/BankAccount'
import Branch from './pages/Branch'
import Navbar from './layouts/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [page,setPage] = useState('account')
  const handleSetPage = (pages)=>{
      setPage(pages)
  }


  return (



    <>
    <Navbar handleSetPage={handleSetPage}pageName={page} />


    {page === 'account' && <BankAccount  />}
    {page === 'branch' && <Branch/>}
 
    </>
  )
}

export default App
