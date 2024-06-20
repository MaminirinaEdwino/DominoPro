import { useNavigate } from "react-router-dom";
import { Input } from "./input";
import Titre from "../titre";

export function Inscription() {
    let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formulaire = new FormData(e.target)
        let nomJoueur = formulaire.get('nomJoueur')
        let email = formulaire.get('email')
        let mdp = formulaire.get('mdp')
        let compte = {
            "email": email,
            "password": mdp,
            "nomJoueur": nomJoueur
        }
        fetch('http://127.0.0.1:8000/api/Joueur/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/ld+json'
            },
            body: JSON.stringify(compte)
        })
            .then(Response => {
                Response.json()
                navigate('/page/transition')
            })
            .then(data => console.log(data))
            .catch(Error => console.log('Error', Error))
        
    }
    return <>
        <div className="acceuil" style={{
            height: '100vh'
        }}>
            <Titre />
            <form onSubmit={handleSubmit} className="FormulaireInscription">
                <Input label={"Nom du joueur"} type={"text"} placeholder={'Nom user'} id={'nomJoueur'} name={'nomJoueur'} />
                <Input label={'Email'} type={'email'} placeholder={'Email'} id={'email'} name={'email'} />
                <Input label={'Mot de passe'} type={'password'} placeholder={'pass'} id={'mdp'} name={'mdp'} />
                <button>S&apos;inscrire</button>
            </form>
        </div>
       
    </>
}