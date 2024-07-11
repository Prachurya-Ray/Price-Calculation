import HeaderMenu from './HeaderMenu';
import OrderViewContent from './OrderViewCOntent';
import KotViewContent from './KotViewContent';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Header = ()=>{
    const [isOrderViewVisible, setIsOrderViewVisible] = useState(false);
    const [isKotVisible, setIsKotVisible] = useState(false);
  
    const toggleVisibility = () => {
        setIsOrderViewVisible(!isOrderViewVisible);
        setIsKotVisible(false);
    };
    const toggleKotVisibility = () => {
        setIsKotVisible(!isKotVisible);
        setIsOrderViewVisible(false);
    };

    return(
        <>
            <div className="header flex-horizontal">
                <div className="dropDown-header flex-horizontal">
                    <div className="order-view margin-left-1rem">
                        <FontAwesomeIcon icon={faFileLines} className='font-awesome-bg-white padding-0-5rem'/>
                        <span className='mouse-pointer' onClick={toggleVisibility}>Order View </span>
                    </div>
                    <div className="kot-view margin-left-1rem">
                        <FontAwesomeIcon icon={faFile} className='font-awesome-bg-white padding-0-5rem'/>
                        <span className='mouse-pointer' onClick={toggleKotVisibility}>Kot View</span>
                    </div>
                </div>
                {
                !isKotVisible && (<HeaderMenu />)
                }
                       
            </div>
            {
                isOrderViewVisible && (<OrderViewContent/>)
            }
            {
                isKotVisible && (<KotViewContent/>)
            }
                
            
        </>
    )
}
export default Header