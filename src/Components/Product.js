import React from 'react';
function Product(props){
    const { item, product, onAdd, onRemove } = props;
    console.log(props)
    return(
        <div className='card'>
            <img className='small' src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>Rs.{product.price}</div>
            <div>
                {item ? <div>
                    <button onClick={() => onRemove(item)} className='remove'>
                        -
                    </button>
                    <span className='p-1'>{item.qty}</span>
                    <button onClick={() => onAdd(item)} className='add'>
                        +
                    </button>
                    </div> :
                         <button onClick={() => onAdd(product)}>Add To Cart</button>

                    }
            </div>
        </div>
    )
}

export default Product