import Types from '../Types/Types'
import './Services.css'

function Services({types}) {
  return (
    <div className='aboutDiv'>
      <div className='div111'>
        <h1 className='hh'>Services</h1>
      </div> 
      <div className='div33'>
          <img className='img33' src='https://kits.moxcreative.com/realmaya/wp-content/uploads/sites/12/2022/05/woman-touching-air-in-vr-glasses.jpg' alt=''/>
          <div className='div44'>
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
        <div className='services'>
          <div  className='iconDiv'>
            <a href='https://www.youtube.com/embed/VhBl3dHT5SY?feature=oembed?playlist=VhBl3dHT5SY&mute=0&autoplay=0&loop=no&controls=0&start=0&end=' className='iicon'>
              <i className="iicon1 fa-solid fa-play"></i>
            </a>
          </div>
          <div className='download'>
            <h1 className='hhh'>Get ready to think beyond the screen</h1>
            <p className='pp'>Purus consectetuer fusce malesuada ultrices feugiat odio curabitur vestibulum per ipsum. Egestas fames lectus lacinia mus habitant tellus senectus hac aptent mi odio.</p>
            <h2 className='h22'>Download the app :</h2>
            <div className='down'>
              <div className='down1'></div>
              <div className='down2'></div>
            </div>
          </div>
        </div>
        <div className='ddiv2'></div>
    </div>
  )
}

export default Services