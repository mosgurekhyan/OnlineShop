import './UniqGood.css'
import axios from 'axios'
import React, { useEffect, useState, memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UniqGood({goods, addProduct}) {
  const [currentGood, setCurrentGood] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
    if (goods.some(e => e.id === id)){
      setCurrentGood({
        ...goods.find(e => e.id === id)
      })
    }else {
        axios.get('https://fakestoreapi.com/products/' + id)
        .then(res => {
            const productsData = res.data
            setCurrentGood({
              id: productsData.id.toString(),
              title: productsData.title,
              image: productsData.image,
              price: productsData.price,
              description: productsData.description,
              category: productsData.category
            })
        })
        .catch(() => {
          navigate('/error')
        })
    }
    }, [])

    
  return (
  <div>
    <div className="data7" key={currentGood?.id}>
      <div className='image4' style={{backgroundImage: `url(${currentGood?.image})`}}></div>
      <div className='data71'>
        <h3 className='name3'>{currentGood?.title}</h3>
        <p className='description3'>{currentGood?.description}</p>
        <p className='price3'>{currentGood?.price}$</p>
        <div className='cat'>
           <p className='category'>{currentGood?.category}</p>
           <button className='btn-1' onClick={() => addProduct(currentGood?.id)}>Add to Basket</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UniqGood