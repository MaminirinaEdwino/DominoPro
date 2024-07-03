import { Link } from "react-router-dom";
import './assets/choixmode.css'


export function ChoixMode() {
    return (
        <>
            <div className="choixmode">
                <Link to="/vsIA" className="btnChoix">Mode Solo</Link>
                <Link to="/Fomrulaire/Connexion" className="btnChoix" >Mode Multi-joueur</Link>
                <Link to="/about" className="btnChoix">A propos du jeu</Link>
                <Link className="btnChoix">Aide</Link>
            </div>
        </>
    )
}