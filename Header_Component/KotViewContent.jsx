import Symbols from './Symbols';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchButton from './SearchButton';
const KotViewContent =()=>{
    return(
        <div className="flex-horizontal kotViewContent">
            <SearchButton/>
            <Symbols/>
        </div>
       
    )
}

export default KotViewContent