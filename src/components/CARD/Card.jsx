import {Link} from 'react-router-dom';
import style from './Card.module.css'
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../../REDUX/Actions';
import { useState, useEffect} from 'react';


function Card({id,name,status,gender,species,origin,image, onClose, addFavourite,removeFavourite, myFavourites}) {  
   
   const [isFav, setIsFav] = useState(false)

   const handleFavourite = () =>{
      if(isFav){
         setIsFav(false);
         removeFavourite(id)
      } else{
         setIsFav(true);
         addFavourite({id,name,status,gender,species,origin,image, addFavourite,removeFavourite} )
      }
   }

   useEffect(() => {
      myFavourites.forEach((fav) => {
         if(fav.id === id){
            setIsFav(true);
         }
      });
   }, [myFavourites]);

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
         <button   onClick={handleFavourite}>❤️</button>
         ) : (
         <button   onClick={handleFavourite}>🤍</button>
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
      addFavourite: (character)=>{dispatch(addFavourite(character))},
      removeFavourite: (id)=>{dispatch(removeFavourite(id))}
   }
 }

 const mapStateToProps = (state) =>{
   return {
      myFavourites: state.myFavourites
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(Card);