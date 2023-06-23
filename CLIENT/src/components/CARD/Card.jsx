import {Link} from 'react-router-dom';
import style from './Card.module.css'
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../REDUX/Actions';
import { useState, useEffect} from 'react';


function Card({id,name,status,gender,species,origin,image, onClose, addFav,removeFav, myFavorites}) {  
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      } else{
         setIsFav(true);
         addFav({id,name,status,gender,species,origin,image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id){
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className={style.container} >
         <div className={style.imageContainer} >
         <div className={style.status}> {status} </div>
           <Link to={`/detail/${id}`} ><img src={image} alt='nombre' 
          className={style.image}
           /></Link>
          <h2 className={style.name}>{name} </h2>
          <button onClick={()=>onClose(id)} className={style.CloseButton}>X</button>  
         </div>
          {
         isFav ? (
         <button onClick={handleFavorite} >❤️</button>
         ) : (
         <button onClick={handleFavorite} >🤍</button>
         )
         }
         <div className={style.atributes}> 
         <h3>{species} ({gender})</h3>
         <h3>Origin: {origin} </h3>
         </div>
         </div>  
   );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
 }

 const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(Card);