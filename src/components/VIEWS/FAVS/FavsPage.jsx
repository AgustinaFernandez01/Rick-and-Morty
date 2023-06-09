import Favourites from "../../FAVOURITES/Favourites"; 
import style from './FavsPage.module.css'

function FavsPage(){
    return(
        <div className={style.landingContainer}><Favourites/></div>
    )
}

export default FavsPage;