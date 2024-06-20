import './assets/chargement.css'
export function Chargement({temps}) {
    return <> <div className="boiteChargemnent">
        <div className="titre">DominoPRO</div>
        <div className="titreChargement">Chargement . . .</div>
     <div className="pourcentageChargement" style={{
        width : temps+'%'
     }}>{temps}% </div>
    </div>
    </>
}