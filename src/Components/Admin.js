import React from 'react'
import { Link } from 'react-router-dom'
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Admin.css'
function Admin(props) {
    const { countCartItems} = props;

  return (
    <div style={{padding:"10px",margin:"10px"}}>
        Admin
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',columnGap:'30px'}}>
            <button style={{border:"2px solid red",padding:"30px",margin:"30px"}}>
               <Link className="icon" to="/admincart"> Orders  <div className="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
               {countCartItems? (
                <button className='badge'>{countCartItems}</button>
                ) : (
                  ''
                )}
                </Link>
                </button>
            <button style={{border:"2px solid red",padding:"30px",margin:"30px"}}>
            <Link className="icon" to="/adminusers"> Users <div className="icon">
      <FontAwesomeIcon icon={faUser} />
    </div></Link>
                </button>
            <button style={{border:"2px solid red",padding:"30px",margin:"30px"}}>
            <Link className="icon" to="/adminbalamount"> Balance Amount <div className="icon">
      <FontAwesomeIcon icon={faBalanceScale} />
    </div></Link>
                </button>
            <button style={{border:"2px solid red",padding:"30px",margin:"30px"}}>
            <Link className="icon" to="/adminadmin"> Admin <div className="icon">
      <FontAwesomeIcon icon={faUserCog} />
    </div> </Link>
                </button>
        </div>

    </div>
  )
}

export default Admin