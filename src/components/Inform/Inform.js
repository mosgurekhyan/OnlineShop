import './Inform.css'

function Inform(props) {
  return (
    <div className='data5'>
       <div className='image' style={{backgroundImage: `url(${props.img})`}}></div>
       <h4 className='type2'>{props.type}</h4>
       <div className='diiiv'>
         <h1 className='question2'>{props.question}</h1>
         <p className='answer2'>{props.answer}</p>
         <p className='comment2'>{props.comment}</p>
       </div>
    </div>
  )
}

export default Inform