import './News.css'

function News(props) {
  return (
    <div className='data3'>
        <div className='iimg' style={{backgroundImage: `url(${props.img})`}}></div>
        <div className='data4'>
          <h3 className='h33-2'>{props.question}</h3>
          <p className='p-10'>{props.comment}</p>
        </div>
    </div>
  )
}

export default News