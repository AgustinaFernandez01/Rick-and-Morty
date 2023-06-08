import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {
 const {onSearch} = props;

   const[id, setId]= useState('')

   function changeHandler(e){
      e.preventDefault();
      let input= e.target.value;
      setId(input);
   }
      return (
      <div className={style.bar}>
         <input type='search'  
         value={id} 
         onChange={changeHandler}
         className={style.searchInput}/>
         <button 
         onClick={() => onSearch(id)} 
         className={style.ButtonSearch}>AGREGAR</button>
      </div>
   );
}
