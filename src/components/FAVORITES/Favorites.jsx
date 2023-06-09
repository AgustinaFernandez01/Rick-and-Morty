import Card from "../CARD/Card";
import { connect} from "react-redux";
import style from './Favorites.module.css'


const Favorites = ({myFavorites}) =>{
    
    return(
        <div className={style.favs}>
        {
        myFavorites?.map((fav) => {
            return(<Card 
                key={fav?.id}
                id={fav?.id}
                name={fav?.name}
                status={fav?.status}
                species={fav?.species}
                gender={fav?.gender}
                origin={fav.origin?.name}
                image={fav?.image}
                onClose={fav?.onClose}
            />) 
        })
    }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);