

export function ComposantInvitation({ demandeur, id, table, iduser, choix }) {
    const supprimerDemande = async () => {
        fetch('http://127.0.0.1:8000/api/demande_de_matches/' + id, {
            method: 'DELETE',
        })
    }
    const accepterDemande = async () => {
        await fetch('http://127.0.0.1:8000/api/demande_de_matches/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/merge-patch+json'
            },
            body: JSON.stringify({
                "choixCible": true
            })
        }).then(res => res.json())
            
        
        await fetch('http://127.0.0.1:8000/api/joueur/table/' + iduser, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/merge-patch+json',
                Authorization: 'Bearer '+localStorage['token']
            },
            body: JSON.stringify({
                "tableDeJeu": table
            })
        }).then(res => res.json())

    }
    
    return <>
        {!choix && <div className="invitationRecu">
            <span className="nomdemandeur">Invitation de {demandeur} à rejoindre une Partie</span> <br />
            <button className='add' onClick={accepterDemande} >Accepter</button>
            <button className='suppr' onClick={supprimerDemande} >Supprimer</button>
        </div>}
    </>
}