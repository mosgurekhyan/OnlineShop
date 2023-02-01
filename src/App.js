import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import NavAndFooter from './Pages/NavAndFooter/NavAndFooter'
import Error from './Pages/Error/Error'
import Shop from './components/Shop/Shop'
import Services from './components/Services/Services'
import UniqGood from './components/UniqGood/UniqGood'
import { useEffect, useState } from 'react'
import Login from './components/Login/Login'
import Basket from './components/Basket/Basket'


function App() {
  const [data, setData] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [open, setOpen] = useState(false)


  const [goods, setGoods] = useState([
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259
    }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500
    }
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430
    }
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400
    }
  }
])

  const [types, setTypes] = useState([
    {
      id: '1',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/I5-1.png',
      title: 'Augmented Reality',
      text: 'Class posuere montes blandit fringilla sem dui tempus nec.'
    },
    {
      id: '2',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/I4-1.png',
      title: 'Collision Detection',
      text: 'Class posuere montes blandit fringilla sem dui tempus nec.'
    },
    {
      id: '3',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/I3-1.png',
      title: 'Interactive Narrative',
      text: 'Class posuere montes blandit fringilla sem dui tempus nec.'
    },
    {
      id: '4',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/I2-1.png',
      title: 'Embodied Cognition',
      text: 'Class posuere montes blandit fringilla sem dui tempus nec.'
    },
    {
      id: '5',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/I1-1.png',
      title: 'Head Tracking',
      text: 'Class posuere montes blandit fringilla sem dui tempus nec.'
    }
  ])

  const [virTypes, setVirTypes] = useState([
    {
      id: '1',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/architect-in-virtual-reality-headset-sitting-at-table-with-laptop-and-windmills-buildings-trees-.jpg',
      icon: 'icon3 fa-solid fa-building',
      title: 'Virtual Reality for Architecture',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor'
    },
    {
      id: '2',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/virtual-reality-excited-father-and-teen-son-trying-vr-glasses-and-playing-videogames-together.jpg',
      icon: 'icon3 fa-solid fa-dice-six',
      title: 'Virtual Reality for Entertainment',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor'
    },
    {
      id: '3',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/young-caucasian-brunette-girl-student-working-with-vr-simulator-in-library-young-woman-in-casual.jpg',
      icon: 'icon3 fa-solid fa-brain',
      title: 'Virtual Reality for Education',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dolor'
    }
  ])

  const [products, setProducts] = useState([
    {
      id: '1',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/P1-1.jpg',
      title: 'VR Gaming Headset With Controller',
      price: 29.00,
    },
    {
      id: '2',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/P2-1-600x600.jpg',
      title: 'New VR Black Gear',
      price: 45.00,
    },
    {
      id: '3',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/P3-1-300x300.jpg',
      title: 'VR Glass Pilot V1',
      price: 47.00,
    },
    {
      id: '4',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/P7-1-300x300.jpg',
      title: 'VR Cardboard Std',
      price: 10.00,
    },
    {
      id: '5',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/P4-1-300x300.jpg',
      title: '3D Model Rift Headset VR',
      price: 65.00,
    },
    {
      id: '6',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/P5-1-300x300.jpg',
      title: 'VR Stealth Blackbox',
      price: 40.00,
    },
    {
      id: '7',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/P6-1-300x300.jpg',
      title: 'Colorful VR Headset',
      price: 29.00,
    },
    {
      id: '8',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/P8-1-600x600.jpg',
      title: 'Multifunctional VR',
      price: 52.00,
    }
  ])

  const [stuff, setStuff] = useState([
    {
      id: '1',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/T1.jpg',
      name: 'JOHN D. DAVIS',
      occupation: 'CEO & Founder'
    },
    {
      id: '2',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/T2.jpg',
      name: 'MICHAEL HOLTON',
      occupation: 'Marketing Manager'
    },
    {
      id: '3',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/T3.jpg',
      name: 'RACHAEL J. HARRIS',
      occupation: 'IT Technical'
    },
    {
      id: '4',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/T4.jpg',
      name: 'JAMES MOORE',
      occupation: 'IT Technical'
    }
  ])

  const [news, setNews] = useState([
    {
      id: '1',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/playful-office-worker-with-virtual-reality-glasses-and-woman-with-tablet-300x200.jpg',
      question: 'How Virtual Reality helps shaping the workspace of the future',
      comment: 'May 5, 2022  No Comments'
    },
    {
      id: '2',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/woman-with-vr-glasses-indoors-300x200.jpg',
      question: 'Virtual Walking Tours upgrade your travel experience',
      comment: 'May 5, 2022  No Comments'
    },
    {
      id: '3',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/young-woman-in-virtual-reality-glasses-300x200.jpg',
      question: 'How is VR changing the event industry',
      comment: 'May 5, 2022  1 Comments'
    }
  ])

  const [inform, setInform] = useState([
    {
      id: '1',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/playful-office-worker-with-virtual-reality-glasses-and-woman-with-tablet.jpg',
      question: 'How Virtual Reality helps shaping the workspace of the future',
      answer: 'Mattis morbi inceptos euismod iaculis vehicula finibus ad. Scelerisque nunc nostra habitant sapien sollicitudin sem justo. Elementum at aptent suspendisse taciti accumsan libero. Massa tempor',
      comment: 'May 5, 2022 . No Comments',
      type: 'TECHNOLOGY'
    },
    {
      id: '2',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/woman-with-vr-glasses-indoors.jpg',
      question: 'Virtual Walking Tours upgrade your travel experience',
      answer: 'Mattis morbi inceptos euismod iaculis vehicula finibus ad. Scelerisque nunc nostra habitant sapien sollicitudin sem justo. Elementum at aptent suspendisse taciti accumsan libero. Massa tempor',
      comment: 'May 5, 2022 . No Comments',
      type: 'INNOVATION'
    },
    {
      id: '3',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/young-woman-in-virtual-reality-glasses.jpg',
      question: 'How is VR changing the event industry',
      answer: 'Mattis morbi inceptos euismod iaculis vehicula finibus ad. Scelerisque nunc nostra habitant sapien sollicitudin sem justo. Elementum at aptent suspendisse taciti accumsan libero. Massa tempor',
      comment: 'May 5, 2022  1 Comment',
      type: 'DEVELOPER  FORUMS'
    },
    {
      id: '4',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/front-view-of-schoolboy-using-virtual-reality-headset-at-school-in-classroom.jpg',
      question: 'Reinventing education with Virtual Reality',
      answer: 'Mattis morbi inceptos euismod iaculis vehicula finibus ad. Scelerisque nunc nostra habitant sapien sollicitudin sem justo. Elementum at aptent suspendisse taciti accumsan libero. Massa tempor',
      comment: 'May 5, 2022 . No Comments',
      type: 'EDUCATION'
    },
    {
      id: '5',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/man-playing-in-virtual-game.jpg',
      question: 'VR & 360° Interactive Video: How are they different?',
      answer: 'Mattis morbi inceptos euismod iaculis vehicula finibus ad. Scelerisque nunc nostra habitant sapien sollicitudin sem justo. Elementum at aptent suspendisse taciti accumsan libero. Massa tempor',
      comment: 'May 5, 2022 . No Comments',
      type: 'INSIGHT'
    },
    {
      id: '6',
      img: 'https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/coworkers-in-vr-goggles-looking-at-monitor-with-data.jpg',
      question: 'Metaverse guide for businesses: With Virtual Reality into the digital future',
      answer: 'Mattis morbi inceptos euismod iaculis vehicula finibus ad. Scelerisque nunc nostra habitant sapien sollicitudin sem justo. Elementum at aptent suspendisse taciti accumsan libero. Massa tempor',
      comment: 'May 5, 2022 . No Comments',
      type: 'BUSINESS'
    }
  ])

  

  const [cartItems, setCartItems] = useState([])

  const addProduct = (product) => {
    const productExist = cartItems.find(e => e.id === product.id)
    if (productExist){
      setCartItems(cartItems.map(e => e.id === product.id ?
        {...productExist, quantity: productExist.quantity + 1} : e))
    }else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  const removeProduct = (product) => {
    const productExist = cartItems.find(e => e.id === product.id)
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter(e => e.id !== product.id))
    }else {
      setCartItems(
        cartItems.map(e => e.id === product.id ? {...productExist, quantity: productExist.quantity - 1} : e)
      )
    }
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavAndFooter setGoods={setGoods} goods={goods} open={open} setOpen={setOpen} currentUser={currentUser}/>}>
           <Route index element={<Home types={types} virTypes={virTypes} products={products} stuff={stuff}/>}/>
           <Route path='aboutus' element={<AboutUs news={news} types={types}/>}/>
           <Route path='services' element={<Services news={news} types={types}/>}/>
           <Route path='shop'>
              <Route index element={<Shop goods={goods} setGoods={setGoods}/>}/>
              <Route path=':id' element={<UniqGood addProduct={addProduct} goods={goods}/>}/>
           </Route>
           <Route path='blog' element={<Blog inform={inform}/>}/>
           <Route path='login' element={<Login setData={setData} setCurrentUser={setCurrentUser} data={data}/>}/>
           <Route path='basket' element={<Basket clearCart={clearCart} removeProduct={removeProduct} addProduct={addProduct} cartItems={cartItems}/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes> 
    </div>
  )
}

export default App
