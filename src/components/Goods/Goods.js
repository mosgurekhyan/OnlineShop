import './Goods.css'
import { useNavigate } from 'react-router-dom'

function Goods(props) {
  const navigate = useNavigate()
  return (
    <div className='data6' key={props.id}>
      <div className='image3' style={{backgroundImage: `url(${props.image})`}}></div>
      <h3 className='name3'>{props.title}</h3>
      <p className='price3'>{props.price}$</p>
      <div className='cat'>
         <p className='category'>{props.category}</p>
         <button className='btn-1' onClick={() => navigate(props.id)}>See More</button>
      </div>
    </div>
  )
}

export default Goods