import { useEffect, useState } from 'react'
import './Shop.css'
import axios from 'axios'
import Goods from '../Goods/Goods'

function Shop({goods, setGoods}) {
  // const [loading, setLoading] = useState(true)
  // const [err, setErr] = useState('')
  // useEffect(() => {
  //   axios.get('https://fakestoreapi.com/products')
  //   .then(response => {
  //     const data = response.data.map(e => ({
  //       id: e.id.toString(),
  //       title: e.title,
  //       image: e.image,
  //       price: e.price,
  //       description: e.description,
  //       category: e.category
  //      }))
  //       setGoods([...data])
  //     })
  //   .catch(err => {
  //     setErr(err.message)
  //   })
  //   .finally(() => {
  //     setLoading(false)
  //   })
  // }, [])

  // *****************************************
  
  useEffect(() => {
   const data = goods.map(e => ({
           id: e.id.toString(),
           title: e.title,
           image: e.image,
           price: e.price,
           description: e.description,
           category: e.category
      } )
    )
    setGoods([...data])
  }, [])


  return (
    <div>
      <div className='div21'>
         <h1 className='h'>Shop Products</h1>
      </div> 
        {
          // loading ? <h1 className='err' style={{color: 'darkcyan'}}>Loading...</h1>
          // : err ? <h1 className='err' style={{color: 'red'}}>{err}</h1> 
          // : 
          <div className='goodsDiv'>
          {
            goods.map(e => <Goods key={e.id} id={e.id} title={e.title} image={e.image} price={e.price} category={e.category}/>)
          } 
          </div>
        }
    </div>
  )
}


export default Shop