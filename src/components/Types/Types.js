import './Types.css'

function Types(props) {
  return (
    <div className='detail'>
       <img className='img4' src={props.img} alt=''/>
       <h2 className='h2-1'>{props.title}</h2>
       <p className='p-2'>{props.text}</p>
    </div>
  )
}

export default Types