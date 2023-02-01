import './Stuff.css'

function Stuff(props) {
  return (
    <div className='data2'>
       <div className='worker' style={{backgroundImage: `url(${props.img})`}}></div>
       <h4 className='h4-3'>{props.name}</h4>
       <h6 className='h6-2'>{props.occupation}</h6>
    </div>
  )
}

export default Stuff