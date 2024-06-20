import { useEffect, useState, useReducer } from "react"
import { ComposantsJoueur } from "./listeJoueurs"
import { ComposantInvitation } from "./invitationrecu"
import './assets/dists/invitaion.css'

export function InterfaceListeJoueur() {
    const [uri, setUri] = useState('')
    const [id, setId] = useState(0)
    const [tableJoueur, setTableJoueur] = useState(0)
    const [token, setToken] = useState(localStorage['token'])
    const [Listejoueur, setlistejoueur] = useState([])
    const [invitaionRecu, setInvitationRecu] = useState([])
    const [nomUser, setNomUser] = useState('')
    const [reducer1, setReducer] = useReducer(x => x + 1, 0)

    const recuperationJouer = async () => {
        await fetch('http://127.0.0.1:8000/api/joueur/info/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/ld+json',
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(res => {
                setUri('/api/joueur/table/' + res['id'])
                setId(res['id'])
                setTableJoueur(res['tableDeJeu'])
                setNomUser(res['nomJoueur'])
            })
        await fetch('http://127.0.0.1:8000/api/joueurs', {
            method: 'GET',
            headers: {
                'Content-Type': 'applicaion/ld+json',
                Authorization: 'Bearer ' + token
            }
        }).then(res => res.json())
            .then(res => {
                setlistejoueur(res['hydra:member'])
            })
    }
    const recuperationInvitation = async () => {
        fetch('http://127.0.0.1:8000/api/demande_de_matches?page=1&cible=' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/ld+json'
            }
        }).then(res => res.json())
            .then(res => {
                setInvitationRecu(res['hydra:member'])
            })
    }
    useEffect(() => {
        setTimeout(() => {
            recuperationJouer()
            recuperationInvitation()
            setReducer()
        }, 1000);
            
    }, [reducer1])
    const [inviter, setInviter] = useState('none')
    const handleInviter = () => {
        if (inviter == 'none') {
            setInviter('block')
            setinvitationblock('none')
        } else {
            setInviter('none')
        }
    }
    const [invitationblock, setinvitationblock] = useState('none')
    const handleInvitation = () => {
        if (invitationblock == 'none') {
            setinvitationblock('block')
            setInviter('none')
        } else {
            setinvitationblock('none')
        }
    }
    const [btnMulti, setBtnMulti] = useState('none')
    const handleBtn = () => {
        if (btnMulti ==  'none') {
            setBtnMulti('block')
        } else {
            setBtnMulti('none')
            setinvitationblock('none')
            setInviter('none')
        }
    }
    return <> 
        <button onClick={handleBtn} className="btnMulti"> <h1 className="fas fa-users" ></h1> </button>
        <div className="choixInvitation" style={{display:btnMulti}}>
            <button onClick={handleInviter} >Inviter</button> <button onClick={handleInvitation}>Invitation</button> <br />
        </div>
        <div className="boiteInvitation" style={{display:inviter}}>
            {Listejoueur.length > 0 ? Listejoueur.map((Listejoueur) => <div key={Listejoueur['id']}>
                <ComposantsJoueur nomDemandeur={nomUser} nomJoueur={Listejoueur['nomJoueur']}
                    cible={Listejoueur['@id']} demandeur={uri} tableJoueur={tableJoueur} idcible={Listejoueur['id']} iddemandeur={id} cibleEnligne={Listejoueur['enligne']} />
            </div>) : 'rien'}
        </div>
        <div className="receptionInvitation" style={{display:invitationblock}}>
            {invitaionRecu.length > 0 ? invitaionRecu.map((InvitationRecu) => <div key={InvitationRecu['id']}>
                <ComposantInvitation choix={InvitationRecu['choixCible']} iduser={id} demandeur={InvitationRecu['nomDemandeur']} id={InvitationRecu['id']} table={InvitationRecu['tableDeJeu']} />
            </div>) : 'rien'} 
        </div>
    </>
}
/**
 *         <button onClick={recuperationJouer}>teste</button>
        <button onClick={recuperationInvitation}>InvitationRecu</button>
 */