export function ComposantsJoueur({ cible, demandeur, tableJoueur, nomJoueur, idcible, iddemandeur, cibleEnligne, nomDemandeur }) {
    const Inviter = async () => {
        const demande = {
            "Demandeur": demandeur,
            "cible": cible,
            "choixCible": false,
            "tableDeJeu": tableJoueur,
            "nomDemandeur": nomDemandeur
        }
        await fetch('http://127.0.0.1:8000/api/demande_de_matches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/ld+json',
                Authorization: 'Bearer ' + localStorage['token']
            },
            body: JSON.stringify(demande)
        }).then(res => res.json())

    }
    return <>
        <div className="invitation">
            <span className="nomJoueur"> {nomJoueur} </span> 
            
            <button className="btninvitation" onClick={Inviter}>Inviter</button>
        </div>
    </>
}