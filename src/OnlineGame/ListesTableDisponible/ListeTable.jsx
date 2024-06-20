import { useEffect, useReducer, useState } from "react"
import { Table } from "./table"
import "./assets/dists/listetable.css"

export function ListeDesTables() {
    const [table, setTable] = useState([])
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    const [uri, setUri] = useState('')
    const [id, setId] = useState(0)
    const [tableJoueur, setTableJoueur] = useState(0)
    const [token, setToken] = useState(localStorage['token'])
    const recuperationDesTable = async () => {
        await fetch('http://'+window.location.hostname+':8000/api/table_de_jeus', {
            method: 'GET',
        }).then(Response => Response.json())
            .then(data => {
                setTable(data['hydra:member'])
            })
            .catch(Error => console.log(Error))

        await fetch('http://127.0.0.1:8000/api/joueur/info/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/ld+json',
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(res => {
                setUri('/api/joueur/table/' + res['id'])
                setId(res['id'])
                setTableJoueur(res['tableDeJeu'])
            })
    }
    useEffect(() => {
        setTimeout(() => {
            recuperationDesTable()
            setReducer()
        }, 1000);
    }, [reducer])
    //misy reducer eto en tant que dependance
    const [liste, setListe] = useState('none')
    const handleListe = (e) => {
        if (liste == 'none') {
            setListe('block')
        } else {
            setListe('none')
        }

    }
    return <> <br />
        <button onClick={handleListe} className="btnMulti"><h1 className="fas fa-table"></h1></button> 
        <div className="listetable" style={{ display: liste }}>
            <div className="boite" >
                {table.length > 0 ? table.map((table) => (<div key={table['id']}>
                    <Table
                        id={table['id']}
                        uri={table['@id']}
                        joueur={table['joueur']}
                        partieLancer={table['partieLance']}
                        uriJoueur={uri}
                        idJoueur={id}
                        tableDeJoueur={tableJoueur}
                        onClick={setReducer}
                    />
                </div>)) : <div className="animation"></div>}
            </div>
        </div>

    </>
}