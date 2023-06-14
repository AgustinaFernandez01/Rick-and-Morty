import style from './LoginForm.module.css';
import {useState} from 'react';






function validate(user){
    let errors = {};
    if(!user.email){
        errors.email = 'Email Vacío';
    }
    if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        errors.email = 'Email Invalido';
    }
    if(user.email.length >= 35 ){
        errors.email = 'Email Invalido';
    }
    if(!/\d/.test(user.password)){
        errors.password = 'Debe contener una letra';    
    }
    if(user.password.length < 6 || user.password.length > 10){
        errors.password = 'Debe tener entre 6 y 10 caracteres';
    }
    return errors;
}

function LoginForm ({login}){

    const  [user, setUser] = useState({
        email:'',
        password:''
    }); 

    const [errors, setErrors] = useState({
        email:'',
        password:''
    });

    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        });

        setErrors(validate({
            ...user,
            [e.target.name]:e.target.value,
        })
      );
    }

    function handleSubmit(e){
        e.preventDefault(user)

        if(!errors.email && !errors.password){
            login(user)
        } else{
            alert('Datos Ingresados Incorrectos')
        }
    }

    return(
        <div className={style.formContainer}>
            <div className={style.formTitle}>
                <h1>INGRESA TUS DATOS</h1>
            </div>
            <form type='submit' onSubmit={handleSubmit}>
                <div className={style.credentials}>
                    <label htmlFor="">Username</label>
                    <input type='text'
                    placeholder='Your Username'
                    name='email'
                    value={user.email}
                    onChange={handleChange}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className={style.credentials}>
                    <label htmlFor="">Password</label>
                    <input type='password'
                    placeholder='Your Password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button  type='submit' className={style.submitBtn}>LOGIN</button>
            </form>
        </div>
    )
}

export default LoginForm;