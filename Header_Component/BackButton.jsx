import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const Back=()=>{
    return(
        <button type="button" className="container-list-height btn btn-light">
                    <FontAwesomeIcon icon={faArrowLeft}  className='padding-0-5rem'/>
                    <span>Back</span>
                </button>
    )
}

export default Back