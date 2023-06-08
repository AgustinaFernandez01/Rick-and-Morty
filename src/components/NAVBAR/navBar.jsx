import SearchBar from '../SEARCHBAR/SearchBar'
import style from './navBar.module.css'
import {Link} from 'react-router-dom'


export default function NavBar ({onSearch}){
    return (
        <div className={style.navBar}>
            <div>
                <Link to='/about'>About</Link>
            </div>
            <div>
                <Link to='/home'>Home</Link>
            </div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}