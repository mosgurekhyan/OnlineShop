import './VirTypes.css'
import { memo } from 'react'

function VirTypes(props) {
  return (
    <div className='virDiv'>
      <div style={{backgroundImage: `url(${props.img})`}} className='virDiv2'>
        <i aria-hidden="true" className={props.icon}></i>
        <h3 className='h3-1'>{props.title}</h3>
        <p className='p-3'>{props.text}</p>
        <button className='btn-1'>LEARN MORE</button>
      </div>
    </div>
  )
}

export default  memo(VirTypes)