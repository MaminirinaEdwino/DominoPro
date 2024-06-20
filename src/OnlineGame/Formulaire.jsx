import { useState } from "react"
import { Connexion } from "./Connexion"
import { Inscription } from "./Inscription"
import './assets/dits/formulaire.css'
export function Formulaire() {
    const [ChoixFormulaire, setChoixFormulaire] = useState('Connexion')
    const handlerChoixConnexion = () => {
        setChoixFormulaire('Connexion')
    }
    const handlerChoixInscription= () => {
        setChoixFormulaire('Inscription')
    }
    if (ChoixFormulaire == 'Connexion') {
        return <>
            <Connexion />
            <button className="inscriptionConnexionChoix" onClick={handlerChoixInscription}>Inscription</button>
        </>
    }
    if (ChoixFormulaire == 'Inscription') {
        return <>
            <Inscription />
            <button className="inscriptionConnexionChoixConnex"  onClick={handlerChoixConnexion}>Se connecter</button>
        </>
    }
}