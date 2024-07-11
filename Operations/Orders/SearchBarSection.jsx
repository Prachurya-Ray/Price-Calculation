
import SearchButton from "../../Header_Component/SearchButton";
import Symbols from "../../Header_Component/Symbols";
const SearchBarSection = ()=>{
    return(
        <div className="d-flex justify-content-between">
            <SearchButton/>
            <Symbols/>
        </div>
    )
}

export default SearchBarSection