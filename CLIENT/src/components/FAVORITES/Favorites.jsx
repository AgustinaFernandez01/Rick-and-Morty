import Card from "../CARD/Card";
import { connect, useDispatch} from "react-redux";
import style from './Favorites.module.css';
import {filterCards, orderCards} from '../../REDUX/Actions';
import { useState } from "react";



const Favorites = ({myFavorites}) =>{

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true)
    }
    
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
        <div className={style.favs}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descedente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters"> All Characters</option>
            </select>
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