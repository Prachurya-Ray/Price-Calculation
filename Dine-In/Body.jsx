import Card from "./Card"
import { CardData } from './Config';
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Body = ()=>{
    

    return(
        <div className="dineIn-main_container" style={{width:'65vw'}}>
                <div className="flex-horizontal dineIn-main_container_header bg-dark p-2">
                    <input type="text" className="form-control margin-right-1rem" placeholder="Search Item" aria-label="Search" />
                    <input type="text" className="form-control margin-right-1rem" placeholder="Short Code" aria-label="Search" />    
                </div>

                <div className="dineIn-main_container_body d-flex flex-wrap">
                    {
                        CardData.map((item)=>{
                            return(  
                                (<Card {...item} key={item.key}/>)
                            )
                            
                        })
                    }



                </div>
            </div>
    )
}

export default Body