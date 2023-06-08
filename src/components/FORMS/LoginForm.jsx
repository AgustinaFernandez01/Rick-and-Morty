import style from './LoginForm.module.css'


function LoginForm (){
    return(
        <div className={style.formContainer}>
            <div className={style.formTitle}>
                <h1>Fill Your Credentials</h1>
            </div>
            <form type='submit'>
                <div className={style.credentials}>
                    <label htmlFor="">Username</label>
                    <input type="text" 
                    onChange={handleChange}
                    placeholder='wubalubadubdub@flarg.com' 
                    name='email'
                    value={user.email}/>
                </div>
                <div className={style.credentials}>
                    <label htmlFor="">Password</label>
                    
                </div>
            </form>
        </div>
    )

}

export default LoginForm;