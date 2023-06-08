import Card from '../CARD/Card';
import style from './Cards.module.css'
export default function Cards({characters, onClose}){
   return(
      <div className={style.CardsContainer}>
         {
            characters.map(({id,name,status,gender,species,origin,image}) =>{
               return(
                  <Card
                   key={id}
                   id={id}
                   name={name}
                   status={status}
                   species={species}
                   gender={gender}
                   origin={origin.name}
                   image={image}
                   onClose={onClose}
                  />
               )
            })
         }
      </div>
   )
}
