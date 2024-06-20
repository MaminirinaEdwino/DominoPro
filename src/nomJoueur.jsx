import { useId } from "react"
import { Input } from "./Input"

export function NomJoueur({ nombreJoueur, nomJ1, setJ1, nomJ2, setJ2, nomJ3, setJ3, nomJ4, setJ4, disable }) {
    const id1 = useId(), id2 = useId(), id3 = useId(), id4 = useId();
    if (nombreJoueur == 2) {
        return (
            <>
                <Input value={nomJ1} placeholder={"joueur 1"} onChange={setJ1} id={id1} label={"Nom joueur 1"} disabled = {disable}/>
                <Input value={nomJ2} placeholder={"joueur 2"} onChange={setJ2} id={id2} label={"Nom joueur 2"} disabled = {disable} />
            </>
        )
    }
    if (nombreJoueur == 3) {
        return (
            <>
                <Input value={nomJ1} placeholder={"joueur 1"} onChange={setJ1} id={id1} label={"Nom joueur 1"} disable = {disable} />
                <Input value={nomJ2} placeholder={"joueur 2"} onChange={setJ2} id={id2} label={"Nom joueur 2"} disable = {disable} />
                <Input value={nomJ3} placeholder={"joueur 3"} onChange={setJ3} id={id3} label={"Nom joueur 3"} disable = {disable}/>
            </>
        )
    }
    if (nombreJoueur == 4) {
        return (
            <>
                <Input value={nomJ1} placeholder={"joueur 1"} onChange={setJ1} id={id1} label={"Nom joueur 1"} disable = {disable}/>
                <Input value={nomJ2} placeholder={"joueur 2"} onChange={setJ2} id={id2} label={"Nom joueur 2"} disable = {disable} />
                <Input value={nomJ3} placeholder={"joueur 3"} onChange={setJ3} id={id3} label={"Nom joueur 3"}  disable = {disable}/>
                <Input value={nomJ4} placeholder={"joueur 4"} onChange={setJ4} id={id4} label={"Nom joueur 4"} disable = {disable}/>
            </>
        )
    }
}