import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect, memo } from 'react'

function NavAndFooter({open, setOpen, currentUser, goods, setGoods}) {
  return (
    <div>
      <Navbar setGoods={setGoods} goods={goods} open={open} setOpen={setOpen} currentUser={currentUser}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default memo(NavAndFooter, (prev, next) => JSON.stringify(prev) === JSON.stringify(next))