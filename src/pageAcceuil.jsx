import Titre from "./titre"
import './assets/acceuil.css'
import { ChoixMode } from "./ChoixMode"
import { Footer } from "./footer"
import { Chargement } from "./chargement"
import { useEffect, useReducer } from "react"

function PageAcceuil() {
    const [tempsChargement, setTempsChargement] = useReducer(x => x + 1, 0)
    useEffect(() => {

        setTimeout(() => {
            setTempsChargement()
        }, 10);
    }, [tempsChargement])

    if (tempsChargement < 101) {
        return <>
            <Chargement temps={tempsChargement} />
        </>

    } else {
        return (
            <>
                <div className="acceuil">
                    <Titre />
                    <ChoixMode />
                    <Footer />
                </div>
            </>
        )
    }
}
export default PageAcceuil