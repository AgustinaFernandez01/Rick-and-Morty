// import axios from 'axios';
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import style from './Detail.module.css'

const  Detail = () => {
    const [character, setCharacter] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((char) =>{
            if(char.name){
                setCharacter(char)
            } else {
                window.alert('No hay personajes con ese ID')
            }
        })
        .catch((err) => {
            window.alert('No hay personajes con ese ID')
        });
        return setCharacter({});
    }, [id]);

    return(  
        <div className={style.detailContainer}> 
        <div className={style.imageContainer}>
            <h2>{character.name}</h2>
            <img src={character.image} alt=''></img>
        </div>
        <div className={style.details}>
            <div>
                <h3>Species:</h3>
                <p>{character.species}</p>
            </div>
            <div>
                <h3>Gender:</h3>
                <p>{character.gender}</p>
            </div>
            <div>
                <h3>Status:</h3>
                <p>{character.status}</p>
            </div>
            <div>
                <h3>Origin:</h3>
                <p>{character.origin?.name}</p> 
            </div>
            <div>
                <h3>Location:</h3>
                <p>{character.location?.name}</p>
            </div>
        </div>
    </div>
    );
}

export default Detail;


// character.origin && character.origin.name si existe el primero devolvera condicionalemnte el segundo