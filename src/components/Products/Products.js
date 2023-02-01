import './Products.css'

function Products(props) {
  return (
    <div className='data'>
       <div className='productImage' style={{backgroundImage: `url(${props.img})`}}></div>
       <span>
         <h4 className='h4-1'>{props.title}</h4>
       </span>
       <h6 className='h6-1'>${props.price}</h6>
       <button className='btn-1'>Add to cart</button>
    </div>
  )
}

export default Products