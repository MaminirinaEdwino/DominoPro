import { useState } from "react";
import { BoiteDialogue } from "./boiteDialogue";

export function AffichageMessage({ joueur, uriUser, id, idUser }) {
    const [affichageDesDiscu, setAffichageDesDiscu] = useState('none')
    const handleAffichageDiscu = () => {
        if (affichageDesDiscu == 'none') {
            setAffichageDesDiscu('grid')
        } else {
            setAffichageDesDiscu('none')
        }
    }
    return <>
        <div className="affichageDesDiscu" onClick={handleAffichageDiscu}>
            <span className="nomJoueur">{joueur['nomJoueur']} </span><br />
            <button>{affichageDesDiscu == 'none'? 'Ouvrir': 'Fermer'} discussion</button>
        </div>
        <div className="discu" style={{display: affichageDesDiscu}}> 
            <BoiteDialogue JoueurUri={joueur['@id']} idJoueur={id} uriUser={uriUser} idUser={idUser}/>
        </div>
    </>

}