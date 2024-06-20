export function NouveauMessage({ uriJoueur, uriUser }) {
    const envoyerMessage = async (e) => {
        e.preventDefault()
        let formulaire = new FormData(e.target)
        let contenu = formulaire.get('inputMessage')
        await fetch('http://'+window.location.hostname+':8000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/ld+json',
            },
            body: JSON.stringify({
                "contenue": contenu,
                "expediteur": uriUser,
                "destinataire": uriJoueur
            })
        }).then(res => res.json())
            .then(res => console.log(res))
    }
    return <>
        <form onSubmit={envoyerMessage}>
            <input className="messageInput" type="text" placeholder="tapez ....." id="inputMessage" name="inputMessage" />
            <button> <i className="fas fa-location-arrow envoye"></i></button>
        </form>
    </>
}