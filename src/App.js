import './App.css';
import Cards from './components/CARDS/Cards.jsx';
import style from './App.module.css';
import NavBar from './components/NAVBAR/navBar';
import {useState} from 'react';
import axios from 'axios';
import { Route,Routes } from 'react-router-dom';
import Detail from './components/VIEWS/DETAIL/Detail';
import About from './components/VIEWS/ABOUT/About'
import ErrorPage from './components/VIEWS/ERROR/errorPage';

   
function App() {
   const[characters, setCharacters] = useState([])
   
   function searchHandler(id){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

 
   function onClose(id){
      const charactersFiltered = characters.filter(character => 
         character.id !== Number(id)) 
      setCharacters(charactersFiltered)
   }


   
   return (
      <div className='App' style={{padding:'25px'}}> 
        <img className={style.imagen} src='https://es.clippingmagic.com/images/158047225/public/downloadPreview/3ce9d5ddecf55604193673581065111bc1de0a68/descarga%20(5)_preview_rev_1.png' alt='logo'/>
         <NavBar onSearch={searchHandler}></NavBar>
         <Routes>
            <Route 
            path='/home' 
            element={ <Cards characters={characters} onClose={onClose} />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<ErrorPage/>}/>
         </Routes>
        
      </div>
   );
}
 
export default App;
