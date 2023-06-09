import LoginForm from "../../FORMS/LoginForm"
import style from './LandingPage.module.css'

function LandingPage({login}){
    return(
        <div className={style.landingContainer}><LoginForm login={login}></LoginForm></div>
    )
}

export default LandingPage;