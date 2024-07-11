import Back from './BackButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const HeaderMenu =()=>{
    return(
        <div className="header-menu flex-horizontal">
                <div className="detail-option flex-horizontal margin-right-1rem">
                    <label className='margin-right-1rem' htmlFor='detailView'>View Details</label>
                    <label class="switch">
                        <input type="checkbox" id='detailView'/>
                        <span class="slider round" ></span>
                    </label>
                </div>

                <ul class="list-group list-group-horizontal margin-right-1rem container-list-height">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <FontAwesomeIcon icon={faFilter} />
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span className='padding-0-5rem'>Foodready </span>
                        <span class="badge bg-danger rounded-pill">0</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span className='padding-0-5rem'>Dispatch</span>
                        <span class="badge bg-danger rounded-pill">0</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span className='padding-0-5rem'>Delivery</span>
                        <span class="badge bg-danger rounded-pill">0</span>
                    </li>
                </ul>

                <button type="button" className="container-list-height btn btn-light margin-right-1rem" ><FontAwesomeIcon icon={faArrowsRotate} /></button>
                <Back/>
                </div>
    )
}

export default HeaderMenu