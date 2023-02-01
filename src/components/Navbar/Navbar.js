import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useState, useEffect } from 'react'

function Navbar({open, setOpen}) {
  const [color, setColor] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e) => {
    if ((e.target.documentElement.scrollTop) > 70){
      setColor(true)
    }else {
      setColor(false)
    }
  }

  return (
    <div>
      <nav style={{backgroundColor: `${color ? 'black' : 'transparent'}`}}>
        <ul className='ul1'>
          <img width='189px' height='23px' alt='' src='https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/Realmaya_logo_greenRed-1.png'/>
          <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/'>Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/aboutus'>About Us</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/services'>Services</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/shop'>Shop</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/blog'>Blog</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/login'>Login<br/></NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? 'active-nav' : null} to='/basket'><i className="img1 fa-sharp fa-solid fa-bag-shopping"></i><br/></NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar