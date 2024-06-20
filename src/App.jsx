

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Plateau from "./plateau"
import PageAcceuil from "./pageAcceuil"
import { Formulaire } from "./OnlineGame/Formulaire.jsx"
import { PageTransitions } from "./OnlineGame/pageTransition.jsx"
import { Multi_Joueur } from "./OnlineGame/Multi_joueur.jsx"
import { Apropos } from "./AboutJeu/apropos.jsx"
const routeur = createBrowserRouter([
  {
    path: '/',
    element: <PageAcceuil />
  },
  {
    path: '/vsIA',
    element: <Plateau />,
  },
  {
    path: '/Fomrulaire/Connexion',
    element: <Formulaire />
  },
  {
    path: '/page/transition',
    element: <PageTransitions />
  },
  {
    path: '/multiJoueur',
    element: <Multi_Joueur />
  },
  {
    path: '/about',
    element: <Apropos />
  }
])
function App() {

  return (
    <RouterProvider router={routeur} />
  )

}


export default App
