import {Link} from 'react-router-dom';
import style from './Card.module.css'

export default function Card({id,name,status,gender,species,origin,image, onClose}) {

   
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
         <div className={style.atributes}> 
         <h3>{species} ({gender})</h3>
         <h3>Origin: {origin} </h3>
         </div>
         </div>  
   );
}
