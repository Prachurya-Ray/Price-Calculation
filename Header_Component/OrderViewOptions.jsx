
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
const OrderViewOptions = ()=>{
    return(
                <ul class="dropDown-orderView-options list-group list-group-horizontal margin-right-1rem container-list-height">
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faList} className='margin-buttom-0'/>
                        <span className='padding-1rem padding-top-0'>All</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faCar} />
                        <span className='padding-1rem padding-top-0'>Delivery</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faTruck} />
                        <span className='padding-1rem padding-top-0'>Take Away</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faWifi} />
                        <span className='padding-1rem padding-top-0'>Online</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                        <span className='padding-1rem padding-top-0'>Swiggy</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                        <span className='padding-1rem padding-top-0'>Zomato</span>
                    </li>
                </ul>
        
    )
}

export default OrderViewOptions