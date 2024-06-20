import { AffichageMessage } from "./affichageMessage";

export function BoiteDiscussion({ listeJoueur, uri, idUser }) {
    
    return <>
        {listeJoueur.map((listeJoueur) => <AffichageMessage
            key={listeJoueur['id']}
            joueur={listeJoueur}
            uriUser={uri}
            id={listeJoueur['id']}
            idUser={idUser} />)}
    </>
}