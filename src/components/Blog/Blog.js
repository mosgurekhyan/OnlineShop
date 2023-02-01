import Inform from '../Inform/Inform'
import './Blog.css'

function Blog({inform}) {
  return (
    <div>
       <div className='div112'>
         <h1 className='h'>Blog</h1>
       </div> 
       <div className='blogDiv'>
        {
          inform.map(e => <Inform key={e.id} img={e.img} type={e.type} question={e.question} answer={e.answer} comment={e.comment}/>)
        }
       </div>
    </div>
  )
}

export default Blog