
import OrderViewOptions from './OrderViewOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const OrderViewContent = ()=>{
    return (
        <div className='flex-horizontal dropDown-header-orderView'>
                <button type="button" className="container-list-height btn btn-light margin-right-1rem" ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <OrderViewOptions />
                <button type="button" className="menu-right-orderView container-list-height btn btn-light margin-right-1rem" ><FontAwesomeIcon icon={faArrowRight} /></button>
                <div className='flex-horizontal  searchBar'>
                    <input type="text" className="form-control margin-right-1rem" placeholder="Enter Order No." aria-label="Search" />
                    <button type="button" class="btn btn-danger">MRF</button>
                </div>
            </div>
    )
}

export default OrderViewContent