import Back from "../Header_Component/BackButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

const BillingHeader = ()=>{
    return(
        <div className="billing-header">
            <div className="flex-horizontal header billing-header_title">
                <span>Online</span>
                <div>
                <button type="button" className="container-list-height btn btn-light margin-right-1rem" ><FontAwesomeIcon icon={faScrewdriverWrench} /></button>
                <Back/>
                </div>
            </div>
            <div className="flex-horizontal header billing-on/off" style={{backgroundColor:"white", height:'3.5rem'}}>
                <div>
                    <span className="padding-1rem">Items On/Off</span>
                    <span>Addon On/Off</span>
                </div>
                <button type="button" className="container-list-height btn  btn-outline-danger margin-right-1rem" >Logistics</button>
            </div>

            <ul class=" dropDown-orderView-options list-group list-group-horizontal margin-right-1rem container-list-height" >
                    
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faClock} />
                        <span className='padding-1rem padding-top-0'>Recent</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faList} />
                        <span className='padding-1rem padding-top-0'>All</span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                        <span className='padding-1rem padding-top-0'>Swiggy
                        </span>
                    </li>
                    <li class="dropDown-orderView-options-menu list-group-item d-flex justify-content-between align-items-center">
                        <span className='padding-1rem padding-top-0' style={{width:"100vw"}}>Zomato</span>
                    </li>
                </ul>

            <div className="mt-5 padding-1rem flex-horizontal filter-section-billing">
                
                <input type="text" className="form-control margin-right-1rem" placeholder="Name" aria-label="Search" />
                <input type="text" className="form-control margin-right-1rem" placeholder="Online Display Name" aria-label="Search" />
                <select name="" id="">
                    <option value={null}>All Categories</option>
                </select>
                <select name="" id="">
                    <option value={null}>All</option>
                </select>
                <button type="button" className="container-list-height btn  btn-danger margin-right-1rem" >Show</button>
                <button type="button" class="container-list-height btn btn-outline-dark">Clear</button>
                <button type="button" class="container-list-height btn btn-outline-dark">Refresh</button>
            </div>
        </div>
    )
}

export default BillingHeader