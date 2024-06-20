export function Table({ uri, id, joueur, partiLance, uriJoueur, idJoueur,  tableDeJoueur, onClick}) {
    
    const rejoindreTable = async () => {
        const table = {
            "tableDeJeu": uri
        }
        await fetch('http://'+window.location.hostname+':8000/api/joueur/table/' + idJoueur, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/merge-patch+json',
                Authorization: 'Bearer ' + localStorage['token']
            },
            body: JSON.stringify(table)
        })
            .then(res => res.json())
        //onClick()
    }

    return <>
        <div className="tableinfo">
            <span className="tittreTable">Table {id} </span> {tableDeJoueur != uri && <button className="btnJoin" onClick={rejoindreTable}>Rejoindre</button>}<br />
            {joueur.length >= 0 || joueur.length != null ? <span className="texteDeco"> Joueur: {joueur.length} </span> : 'aucun Joueur'}
            {partiLance == true || partiLance != null ? <span className="texteDeco"> Partie en Cours </span> : <span className="texteDeco"> En attente de joueur </span>} <br />
            
        </div>
    </>
}