/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Valeur } from "./valeur"
import './assets/domino.css'
export function Domino({ valeur1, valeur2, onClick, cle, emplacement }) {
    let className = ''
    if (emplacement == 1 ) {
        className = "domino anatymain"
    }
    if (emplacement == 3) {
        className = "domino logo"
    }
    if (emplacement == 2  && valeur1 != valeur2) {
        className = "domino midaboka placer"
    }
    if (emplacement == 2 && valeur1 == valeur2) {
        className = "domino mitsangana placer"
    }
    return <>
        <div className={className} onClick={(e)=>onClick(cle)}>
            <Valeur valeur={valeur1} place={1}/>
            <Valeur valeur={valeur2} place={2}/>
        </div>
    </>
}