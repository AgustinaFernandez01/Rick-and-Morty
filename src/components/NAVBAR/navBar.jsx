import SearchBar from '../SEARCHBAR/SearchBar'
import style from './navBar.module.css'
import {NavLink} from 'react-router-dom'


export default function NavBar ({onSearch, random}){
    return (
        <div className={style.navBar}>
            <div>
                <NavLink to='/about' className={style.aboutBtn}>About</NavLink>
            </div>
            <div>
                <NavLink to='/home' className={style.homeBtn}>Home</NavLink>
            </div>
            <div>
                <NavLink to='/favorites' className={style.favoritesBtn}>Favorites</NavLink>
            </div>
            <SearchBar onSearch={onSearch}/>
            <button className={style.random} onClick={random}>ADD RANDOM</button>
        </div>
    )
}