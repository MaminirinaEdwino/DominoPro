import { useEffect, useState } from "react"
import { BoiteDiscussion } from "./boiteDiscussion"
import './assets/dist/message.css'
export function InterfaceMessagerie({uriUser, idUser, tableUser, nomUser}) {
    const [listeJoueurs, setlistejoueur] = useState([])

    const recuperationListeJoueur = async () => {
        await fetch('http://'+window.location.hostname+':8000/api/joueurs', {
            method: 'GET',
            headers: {
                'Content-Type': 'applicaion/ld+json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(res => {
                setlistejoueur(res['hydra:member'])
            })
    }
    useEffect(() => {
        setTimeout(() => {
            recuperationListeJoueur()
            
        }, 1000);
    }, [])
    const [handleMessages, setHandleMessages] = useState('none')
    const handlerMessages = () => {
        if (handleMessages == 'none') {
            setHandleMessages('block')
        } else {
            setHandleMessages('none')
        }
    }
    return <>
        <button onClick={handlerMessages} className="btnMulti"> <h2 className="fas fa-sms"></h2> </button>
        <div className="interfaceMessagerie" style={{display: handleMessages}}>
            <BoiteDiscussion listeJoueur={listeJoueurs} idUser={idUser} uri={uriUser} />
        </div>
        
    </>
}