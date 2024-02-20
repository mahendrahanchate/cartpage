import React from 'react';
// import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
function Header(props) {
    const { countCartItems} = props;
    // console.log(props)
    return(
        <div>


        <div className='row center block'>
            <div>
                <a href='#/'>'
                {/* <h2>Trendy Trinkets</h2> */}
                <div className="Gear" data-aos="zoom-in" data-aos-duration="3000">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <h2 className='Head-ing'>Trendy Trinkets</h2>
                </div>
                </a>
            </div>
            <div>
                <Link to="/admin">
                    {/* Admin */}
              
                <div className="icon">
      <FontAwesomeIcon icon={faUserCog} />
    </div>
    </Link>
                
                <a href='#/cart'>
      {/* Cart */}
      {/* <button> */}
      <div className='icon'>
        <FontAwesomeIcon style={{width:"fit-Content"}} icon={faShoppingCart} /></div>
      {/* </button> */}
      {countCartItems ? (
        <button  className='badge'>{countCartItems}</button>
      ) : (
        ''
      )}
                </a> {' '}
            </div>
        </div>
        </div>
    )
}
export default Header;