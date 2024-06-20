import { Link } from "react-router-dom";

export function PageTransitions() {
    return <>
        Inscription éfféctuer <br />
        Utilisez votre Email et mot de passe pour vous connectez <br />
        <Link to='/Fomrulaire/Connexion'>Se connecter</Link>
    </>
}