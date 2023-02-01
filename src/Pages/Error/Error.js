import { Link, NavLink } from 'react-router-dom'
import './Error.css'

function Error() {
  return (
    <div>
      <div className='error'></div>
      <div className='error2'>
        <h1 className='er1'>404</h1>
        <h1 className='er2'>Page Not Found</h1>
        <p className='er3'>It looks like nothing was found at this location. Perhaps searching can help. Or you can go back to the Homepage</p>
        <Link to={'/'} className='btn-1'><i className="arrow fa-sharp fa-solid fa-arrow-left-long"></i>BACK TO HOMEPAGE</Link>
      </div>
    </div>
  )
}

export default Error