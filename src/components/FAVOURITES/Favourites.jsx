import Card from "../CARD/Card";
import { connect} from "react-redux";


const Favourites = ({myFavourites}) =>{
    
    return(
        <div>
        {
        myFavourites?.map((fav) => {
                return(<Card
                key={fav.id}
                id={fav.id}
                name={fav.name}
                status={fav.status}
                species={fav.species}
                gender={fav.gender}
                origin={fav.origin.name}
                image={fav.image}
                />) 
            })
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavourites: state.myFavourites
    }
}
export default connect(mapStateToProps,null)(Favourites);