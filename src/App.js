import './App.css';
import Cards from './components/CARDS/Cards.jsx';
import style from './App.module.css';
import NavBar from './components/NAVBAR/navBar';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Route,Routes, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/VIEWS/DETAIL/Detail';
import About from './components/VIEWS/ABOUT/About'
import ErrorPage from './components/VIEWS/ERROR/errorPage';
import LandingPage from './components/VIEWS/LANDING/LandingPage';
import Favorites from './components/FAVORITES/Favorites'


   
function App() {
   const[characters, setCharacters] = useState([])
   const location= useLocation();

   const navigate = useNavigate()
   const [access, setAccess] = useState(false);
   const EMAIL = 'agustina123@gmail.com';
   const PASSWORD = 'agus123';

   function login(userData){
      if (userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]); 
   
   function searchHandler(id){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name && !characters.find(char => char.id === data.id)) {
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

   function randomHandler(){
      let haveIt=[];
      let random =(Math.random()*826).toFixed();
      random =Number(random);
   if(!haveIt.includes(random)){
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then((response) => response.json())
      .then((data) =>{
         if(data.name){
            setCharacters((oldChars) => [...oldChars, data])
         } else{
            window.alert('Algo Salio Mal')
         }
      });
   } else {
      console.log('Ya agregaste todos los personajes');
      return false;
   }
   }

   return (
      <div className='App' style={{padding:'25px'}}> 
      {location.pathname !== '/' && <img className={style.imagen} src='https://es.clippingmagic.com/images/158047225/public/downloadPreview/3ce9d5ddecf55604193673581065111bc1de0a68/descarga%20(5)_preview_rev_1.png' alt='logo'/>} 
      {location.pathname !== '/' && (<NavBar onSearch={searchHandler} random={randomHandler}></NavBar>)} 
         <Routes>
            <Route path='/' element={<LandingPage login={login}/>}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />}/> 
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='*' element={<ErrorPage/>}/> 
         </Routes>
      </div>
   );
}
 
export default App;
