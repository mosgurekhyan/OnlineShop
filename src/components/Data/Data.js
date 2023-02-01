import './Data.css'

function Data(props) {
    return (
        <div className='datta'>
          <div className='basketImage' style={{backgroundImage: `url(${props.image})`}}></div>
          <h3 className='name3'>{props.category}</h3>
          Data
        </div>
      )
}

export default Data