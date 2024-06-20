import { useState } from "react"

export function Message({ contenu, expediteur, uriUser }) {
    
    return <>
        <div className={expediteur == uriUser?'message droite': 'message gauche'}>
            {contenu}
        </div>
    </>
}