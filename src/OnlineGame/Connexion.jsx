import { useNavigate } from "react-router-dom";
import { Input } from "./input";
import { useState } from "react";
import Titre from "../titre";
import '../acceuil.css'
import './assets/dits/connexion.css'

export function  Connexion() {
    const navigate = useNavigate()
    const [verficationInfo, setVerificationInfo] = useState(false)
    const chemin = window.location.hostname
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formulaire = new FormData(e.target)
        let email = formulaire.get('email')
        let password = formulaire.get('mdp')
        
        const compte = {
            "email": email,
            "password": password
        }
        console.log(compte)
        await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/ld+json'
            },
            body: JSON.stringify(compte)
        })
            .then(Response => Response.json())
            .then(data => {
                localStorage.setItem('token',data['token'])
                //navigate('/multiJoueur')
                if (data.token == undefined) {
                    navigate('/Fomrulaire/Connexion')
                    console.log('teste')
                    setVerificationInfo(true)
                }
                if (data.token != undefined) {
                    navigate('/multiJoueur')
                    setVerificationInfo(false)
                }
            })
            .catch(Error => console.log('Error', Error))
        /*
        const f2 = fetch('http://127.0.0.1:8000/api/joueur/info/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/ld+json',
                Authorization: 'Bearer ' + tok
            },
        })
            .then(Response => Response.json())
            .then(data => {
                setUri('/api/joueur/table/' + data['id']);
                setNomJoueur(data['nomJoueur'])
            })
            .catch(Error => console.log('Error', Error))
        console.log(nomJoueur, uriJoueur)*/
    }
    return <>
        <div className="acceuil" style={{
            height: '100vh'
        }}>
            <Titre />
            <form onSubmit={handleSubmit} className="FormConnexion">
                <Input placeholder={'EmailUser@gmail.com'} label={"Email"} id={"emailUser"} type={"email"} name={"email"} />
                <Input placeholder={"password"} type={"password"} label={"Mot de passe"} name={'mdp'} id={"mdp"} />
                {verficationInfo && <div>Verifier votre email ou mot de passe</div>}
                <button>Se connecter</button> <br />
            </form>
        </div>
        
        
    </>
}