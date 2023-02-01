import './Home.css'
import Types from '../Types/Types'
import VirTypes from '../VirTypes/VirTypes'
import Products from '../Products/Products'
import Stuff from '../Stuff/Stuff'
import { useEffect, useState } from 'react'

function Home({types, virTypes, products, stuff}) {
  const [come, setCome] = useState(false)
    useEffect(() => {
      setCome(true)
    }, [])
  return (
    <div>
        <img className='img2' src='http://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/young-woman-in-vr-headset-pointing-with-fingers-at-glowing-cyber-illustration-on-dark-background.jpg' alt=''/>
        <div className='div1'>
          <div className='div2' style={{marginTop: `${come ? '0' : '400px'}`}}>
            <h1 className='h1-1'>See the world through your eyes!</h1>
            <h6 className='h6-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h6>
            <button className='btn-1'>GET STARTED</button>
          </div>
        </div>
        <div className='div3'>
          <img className='img3' src='https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/woman-touching-air-in-vr-glasses.jpg' alt=''/>
          <div className='div4'>
             <h5 className='h5-1'>INTO REALITY</h5>
             <h1 className='h1-2'>Welcome to the world you’ve never seen before</h1>
             <div className='line'></div>
             <p className='p-1'>Accumsan quisque ac senectus enim velit. Donec torquent id eu interdum fames nunc ex habitant integer ipsum. Magna luctus conubia hac rhoncus ornare senectus tellus aliquet nunc nullam.</p>
             <button className='btn-1'>DISCOVER MORE</button>
          </div>
        </div>
        <div className='div5'>
            {
              types.map(e => <Types key={e.id} id={e.id} title={e.title} img={e.img} text={e.text}/>)
            }
        </div>
        <div className='div6'>
          <div className='div6-1'>
            <h5 className='h5-1'>WHY CHOOSE US</h5>
            <h1 className='h1-2'>Virtual reality is about to become our new reality</h1>
            <div className='div6-3'>
              <p className='p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='div6-4'>
              <div className='d1'>
                <b><i aria-hidden="true" className="icon1 far fa-dot-circle"></i>Responsive</b>
                <b><i aria-hidden="true" className="icon1 far fa-dot-circle"></i>Interactive</b>
                <b><i aria-hidden="true" className="icon1 far fa-dot-circle"></i>More Realistic</b>
              </div>
              <div className='d2'>
                <b><i aria-hidden="true" className="icon1 far fa-dot-circle"></i>Fully Immersive</b>
                <b><i aria-hidden="true" className="icon1 far fa-dot-circle"></i>More Affordable</b>
              </div>
            </div>
          </div>
          <div className='div6-2'></div>
        </div>
        <div className='div7'>
          <div className='div7-1'>
            <h5 className='h5-1'>OUR SERVICE</h5>
            <h1 className='h1-2'>Experience the world like never before</h1>
            <div className='div6-3'>
              <p className='p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>
        </div>
        <div className='div7-2'>
          {
            virTypes.map(e => <VirTypes key={e.id} id={e.id} title={e.title} img={e.img} text={e.text} icon={e.icon}/>)
          }
        </div>
        <div className='div8'>
          <div className='div8-1'>
            <h5 className='h5-1'>ONLINE STORE</h5>
            <h1 className='h1-2'>Our Awesome Product</h1>
            <p className='p-0'></p>
          </div>
          <div className='div8-2'>
             {
               products.map(e => <Products key={e.id} id={e.id} img={e.img} title={e.title} price={e.price}/>)
             }
          </div>
        </div>
        <div className='div8-11'></div>
        <div className='div9'>
          <div className='div9-1'>
            <h1 className='h1-2'>Grab your best Discount Today!</h1>
            <h1 className='h1-3'>Sale up to 30% OFF to all products</h1>
            <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className='btn-1'>SHOP NOW</button>
          </div>
        </div>
        <div className='div10'>
          <div className='div10-1'>
            <h5 className='h5-1'>MEET OUR TEAM</h5>
            <h1 className='h1-2'>Dreams and teams work together</h1>
          </div>
          <div className='div10-2'>
            {
              stuff.map(e => <Stuff key={e.id} id={e.id} img={e.img} name={e.name} occupation={e.occupation}/>)
            }
          </div>
        </div>
    </div>
  )
}

export default Home