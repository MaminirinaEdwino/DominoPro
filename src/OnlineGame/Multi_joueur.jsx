import { useEffect, useState } from "react";
import { InterfaceListeJoueur } from "./Invitation/interfaceListeJoueur";
import { ListeDesTables } from "./ListesTableDisponible/ListeTable";
import { InterfaceMessagerie } from "./Messagerie/InterfaceMessagerie";
import '../../src/assets/fontawesome-free-6.5.1-web/css/all.css'
import { Plateaux } from "./Plateau/plateau";
import { Footer } from "../footer";

export function Multi_Joueur() {
    const [uri, setUri] = useState('')
    const [id, setId] = useState(0)
    const [table, settable] = useState('')
    const [nomJoueur, setNom] = useState('')

    const fetchUri = async () => {
        await fetch('http://127.0.0.1:8000/api/joueur/info/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/ld+json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(res => {
                setUri('/api/joueur/table/' + res['id'])
                setId(res['id'])
                localStorage.setItem('idUser', res['id'])
                localStorage.setItem('uriTable', res['tableDeJeu'])
                settable(res['tableDeJeu'])
                setNom(res['nomJoueur'])
            })
    }
    useEffect(() => {
        setTimeout(() => {
            fetchUri()
        }, 1000);
    }, [])
    return <>
        <div style={{height: '100vh'}}>
            <header>
                <ListeDesTables />
                <InterfaceListeJoueur />
                <InterfaceMessagerie nomUser={nomJoueur} tableUser={table} idUser={id} uriUser={uri} />
            </header>

            <div className="plateau" style={{ height: '80%', width: '100%'}}>
                <Plateaux tableJoueur={table} idJoueur={id}/>
            </div>
            <Footer />
        </div>
    </>
}