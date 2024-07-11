import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const CartItem = ()=>{
    const [itemName, setItemName] = useState(null)
    const [itemPrice, setItemPrice] = useState(null)
    const [itemQuantity, setItemQuantity] = useState(1)
    return(
        <div className="flex-horizontal cart-item justify-content-between" style={{}}>
                        <span className='ps-2'>Pizza</span>
                        <span className='flex-horizontal'>
                            <button type="button" class="btn btn-warning margin-right-1rem" onClick={
                                ()=>{
                                    (itemQuantity>1)&&(setItemQuantity(itemQuantity-1))
                                }
                            }><FontAwesomeIcon icon={faMinus} /></button>
                            <input type="text" className="dineIn-menu-quantity-bar form-control margin-right-1rem ps-4" value={itemQuantity} aria-label="Search" />
                            <button type="button" class="btn btn-warning" onClick={
                                ()=>{
                                    setItemQuantity(itemQuantity+1)
                                }
                            }><FontAwesomeIcon icon={faPlus} /></button>                           
                        </span>
                        <span className='pe-2'>$ 100</span>
                    </div>
    )
}

export default CartItem