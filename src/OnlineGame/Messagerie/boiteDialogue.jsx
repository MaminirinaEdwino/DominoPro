import { useEffect, useState } from "react";
import { Message } from "./messagerie";
import { NouveauMessage } from "./nouveauMessage";

export function BoiteDialogue({ JoueurUri, uriUser, idJoueur, idUser }) {
    const [messages, setMessage] = useState([])
    const recuperationMessage = async () => {
        await fetch('http://'+window.location.hostname+':8000/api/messages?page=1&expediteur[]=' + localStorage.getItem('idUser') + '&expediteur[]=' + idJoueur + '&destinataire[]=' + localStorage.getItem('idUser') + '&destinataire[]=' + idJoueur, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/ld+json'
            }
        }).then(res => res.json())
            .then(res => {
                setMessage(res['hydra:member'])
            })
    }
    useEffect(() => {
        setTimeout(() => {
            recuperationMessage()
        }, 3000);


    }, [])

    return <>
        <div className="Boite_message" style={{ margin: '10px' }}>
            {messages.length > 0 && messages.map((message) =>  <Message key={message['id']} contenu={message['contenue']} expediteur={message['expediteur']['@id']} uriUser={uriUser}/>)}
        </div>
        <NouveauMessage uriJoueur={JoueurUri} uriUser={uriUser}/>
    </>
}