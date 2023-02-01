import './Basket.css'
import { useNavigate } from 'react-router-dom'


function Basket({cartItems, addProduct, removeProduct, clearCart}) {
  const navigate = useNavigate()
  const totalPrice = cartItems.reduce((price, e) => price + e.quantity * e.price, 0)

  return (
    <div className='basket'>
      <div className='basket1'>
       <div className='basketName'>Basket</div><br />
         <div className='clearBasket'>
           {
             cartItems.length >= 1 && (<span className='delet' onClick={clearCart}>Clear Basket</span>)
           }
         
           {
             cartItems.length === 0 && (<div className='empty'>No Items are added</div>)
           }
         </div>
         
           {
             cartItems.map(e => (
               <div key={e.id} className='basketData'>
                 <img alt='' src={e.image} className='product-image'/>
                 <div className='basketDetail'>
                   <div className='productTitle'>{e.title}</div>
                   <div className='functions'>
                     <button className='btnFunction' onClick={() => addProduct(e)}>+</button>
                     <button className='btnFunction' onClick={() => removeProduct(e)}>-</button>
                   </div>
                   <div className='busketPrice'>
                     {e.quantity} * ${e.price}
                   </div>
                 </div>
               </div>
             ))
            }
         <div className='totalPrice'>
           Total Price ${totalPrice}
         </div>
      </div>  
    </div>
  )
}

export default Basket