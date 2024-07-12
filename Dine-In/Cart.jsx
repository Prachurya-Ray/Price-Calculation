import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';
const Cart = ()=>{
    return(

        
        
        <div className="dineIn-main_container_cart"  style={{width:'40vw'}}>

            <div className="dineIn-main_container_cart_header">
                <div className="dineIn-main_container_cart_header_top d-flex mt-0">
                    <span className="flex-fill p-2 bg-success text-light text-center">Dine In</span>
                    <span className="flex-fill p-2 bg-dark text-light text-center">Delivery</span>
                    <span className="flex-fill p-2 bg-dark text-light text-center">Pick Up</span>
                </div>

                <div className='flex-horizontal' style={{justifyContent:'space-between'}}>
                    <div>
                        <ul class="dropDown-orderView-options list-group list-group-horizontal margin-right-1rem container-list-height">
                            <li class=" list-group-item d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon icon={faFilter} />
                            </li>
                            <li class=" list-group-item d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon icon={faUser} />
                            </li>
                            <li class=" list-group-item d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon icon={faUsers} />
                            </li>
                            <li class=" list-group-item d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon icon={faBook} />
                            </li>
                            <li class=" list-group-item d-flex justify-content-between align-items-center">
                                <FontAwesomeIcon icon={faKitchenSet} />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button type="button" class="btn btn-warning">Basement 1</button>
                    </div>
                </div>
            </div>   



            {/* Body */}
            <div className="dineIn-main_container_cart_body">
                <div className='flex-horizontal bg-secondary text-light' style={{justifyContent:'space-between'}}>
                    <span className='ps-2'>Items</span>
                    <span>Qty 1</span>
                    <span className='pe-2'>Price</span>
                </div>

                <div className='dineIn-cart'>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
            </div> 
                
           
        </div>

    )
}

export default Cart