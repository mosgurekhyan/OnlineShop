import Types from '../Types/Types'
import './AboutUs.css'
import News from '../News/News'

function AboutUs({types, news}) {
  return (
    <div className='aboutDiv'>
      <div className='div11'>
        <h1 className='h'>About Us</h1>
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
        <div className='div12'>
          <div className='div12-1'>
            <div className='div12-11'></div>
            <div className='div12-12'>
              <h2 className='h22'>Metaverse guide for businesses: With Virtual Reality into the digital future</h2>
              <p className='p-6'>May 5, 2022 . No Comments</p>
              <p className='p-7'>Mattis morbi inceptos euismod iaculis vehicula finibus ad. Scelerisque nunc nostra habitant sapien sollicitudin sem justo. Elementum at aptent suspendisse taciti accumsan libero. Massa tempor</p>
            </div>
          </div>
          <div className='div12-2'>
            <h5 className='h55'>INSIGHT</h5>
            <div className='item'>
              <h1 className='h1-7'>News update</h1>
              <div className='line2'></div>
            </div>
              <p className='pp'>Sem felis dictumst luctus mattis laoreet fringilla placerat eleifend senectus. Aliquam nulla urna commodo cubilia magnis orci viverra amet quisque ultrices vehicula. Lobortis tellus sed tortor mi imperdiet odio etiam.</p>
              <div className='ddiv'>
                {
                  news.map(e => <News key={e.id} id={e.id} img={e.img} question={e.question} comment={e.comment}/>)
                }
              </div>
          </div>
        </div>
        <div className='ddiv2'></div>
    </div>
  )
}

export default AboutUs