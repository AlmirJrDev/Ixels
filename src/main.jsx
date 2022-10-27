import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
//Sidebar
import App from "./routes/App"
import Home from "./routes/Home"
import Pixel from "./routes/Pixel"
import Setup from "./routes/Setup"
import Reticula from "./routes/Reticula"

//Mapas

import Mapa from "./routes/Mapa"
import Ascent from "./routes/MapaAscent"
import Bind from "./routes/MapaBind"
import Breeze from "./routes/MapaBreeze"
import Fracture from "./routes/MapaFracture"
import Haven from "./routes/MapaHaven"
import Icebox from "./routes/MapaIcebox"
import Pearl from "./routes/MapaPearl"

//Agentes Mapa Ascent

import BreachAscent from "./routes/AgentesAscentBreach"
import BrimstoneAscent from "./routes/AgentesAscentBrimstone"
import FadeAscent from "./routes/AgentesAscentFade"
import KayoAscent from "./routes/AgentesAscentKayo"
import KilljoyAscent from "./routes/AgentesAscentKilljoy"
import PhoenixAscent from "./routes/AgentesAscentPhoenix"
import SageAscent from "./routes/AgentesAscentSage"
import SovaAscent from "./routes/AgentesAscentSova"
import RazeAscent from "./routes/AgentesAscentRaze"
import ViperAscent from "./routes/AgentesAscentViper"
import YoruAscent from "./routes/AgentesAscentYoru"

//Agentes Mapa Bind

import BreachBind from "./routes/AgentesBindBreach"
import BrimstoneBind from "./routes/AgentesBindBrimstone"
import FadeBind from "./routes/AgentesBindFade"
import KayoBind from "./routes/AgentesBindKayo"
import KilljoyBind from "./routes/AgentesBindKilljoy"
import PhoenixBind from "./routes/AgentesBindPhoenix"
import SageBind from "./routes/AgentesBindSage"
import SovaBind from "./routes/AgentesBindSova"
import RazeBind from "./routes/AgentesBindRaze"
import ViperBind from "./routes/AgentesBindViper"
import YoruBind from "./routes/AgentesBindYoru"

//Agentes Mapa Breeze

import BreachBreeze from "./routes/AgentesBreezeBreach"
import BrimstoneBreeze from "./routes/AgentesBreezeBrimstone"
import FadeBreeze from "./routes/AgentesBreezeFade"
import KayoBreeze from "./routes/AgentesBreezeKayo"
import KilljoyBreeze from "./routes/AgentesBreezeKilljoy"
import PhoenixBreeze from "./routes/AgentesBreezePhoenix"
import SageBreeze from "./routes/AgentesBreezeSage"
import SovaBreeze from "./routes/AgentesBreezeSova"
import RazeBreeze from "./routes/AgentesBreezeRaze"
import ViperBreeze from "./routes/AgentesBreezeViper"
import YoruBreeze from "./routes/AgentesBreezeYoru"

//Agentes Mapa Fracture

import BreachFrac from "./routes/AgentesFracBreach"
import BrimstoneFrac from "./routes/AgentesFracBrimstone"
import FadeFrac from "./routes/AgentesFracFade"
import KayoFrac from "./routes/AgentesFracKayo"
import KilljoyFrac from "./routes/AgentesFracKilljoy"
import PhoenixFrac from "./routes/AgentesFracPhoenix"
import SageFrac from "./routes/AgentesFracSage"
import SovaFrac from "./routes/AgentesFracSova"
import RazeFrac from "./routes/AgentesFracRaze"
import ViperFrac from "./routes/AgentesFracViper"
import YoruFrac from "./routes/AgentesFracYoru"

//Agentes Mapa Haven

import BreachHaven from "./routes/AgentesHavenBreach"
import BrimstoneHaven from "./routes/AgentesHavenBrimstone"
import FadeHaven from "./routes/AgentesHavenFade"
import KayoHaven from "./routes/AgentesHavenKayo"
import KilljoyHaven from "./routes/AgentesHavenKilljoy"
import PhoenixHaven from "./routes/AgentesHavenPhoenix"
import SageHaven from "./routes/AgentesHavenSage"
import SovaHaven from "./routes/AgentesHavenSova"
import RazeHaven from "./routes/AgentesHavenRaze"
import ViperHaven from "./routes/AgentesHavenViper"
import YoruHaven from "./routes/AgentesHavenYoru"


//Agentes Mapa Icebox

import BreachIce from "./routes/AgentesIceBreach"
import BrimstoneIce from "./routes/AgentesIceBrimstone"
import FadeIce from "./routes/AgentesIceFade"
import KayoIce from "./routes/AgentesIceKayo"
import KilljoyIce from "./routes/AgentesIceKilljoy"
import PhoenixIce from "./routes/AgentesIcePhoenix"
import SageIce from "./routes/AgentesIceSage"
import SovaIce from "./routes/AgentesIceSova"
import RazeIce from "./routes/AgentesIceRaze"
import ViperIce from "./routes/AgentesIceViper"
import YoruIce from "./routes/AgentesIceYoru"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Pixel",
    element: <Pixel />,
  },
  {
    path: "Setup",
    element: <Setup />,
  },

  {
    path: "Reticulas",
    element: <Reticula />,
  },
  
  {
    path: "Pixel-Mapas",
    element: <Mapa />,
  }, 
  
  {
    path: "Pixel-Mapas-Ascent",
    element: <Ascent />,
  },
    
  {
    path: "Pixel-Mapas-Bind",
    element: <Bind />,
  },

  {
    path: "Pixel-Mapas-Breeze",
    element: <Breeze />,
  },
  
  {
    path: "Pixel-Mapas-Fracture",
    element: <Fracture />,
  },
    
  {
    path: "Pixel-Mapas-Haven",
    element: <Haven />,
  },
    
  {
    path: "Pixel-Mapas-Icebox",
    element: <Icebox />,
  },
    
  {
    path: "Pixel-Mapas-Pearl",
    element: <Pearl />,
  },

  {
    path: "Pixel-Mapas-Ascent-Breach",
    element: <BreachAscent />,
  },

  
  {
    path: "Pixel-Mapas-Ascent-Brimstone",
    element: <BrimstoneAscent />,
  },
  {
    path: "Pixel-Mapas-Ascent-Fade",
    element: <FadeAscent />,
  },

  {
    path: "Pixel-Mapas-Ascent-Kayo",
    element: <KayoAscent />,
  },

  {
    path: "Pixel-Mapas-Ascent-Killjoy",
    element: <KilljoyAscent />,
  },

  
  {
    path: "Pixel-Mapas-Ascent-Phoenix",
    element: <PhoenixAscent />,
  },

  {
    path: "Pixel-Mapas-Ascent-Sage",
    element: <SageAscent />,
  },

  {
    path: "Pixel-Mapas-Ascent-Sova",
    element: <SovaAscent />,
  },

  
  {
    path: "Pixel-Mapas-Ascent-Raze",
    element: <RazeAscent />,
  },

  {
    path: "Pixel-Mapas-Ascent-Viper",
    element: <ViperAscent />,
  },

  {
    path: "Pixel-Mapas-Ascent-Yoru",
    element: <YoruAscent />,
  },

  
  {
    path: "Pixel-Mapas-Bind-Breach",
    element: <BreachBind />,
  },  

  
  
  {
    path: "Pixel-Mapas-Bind-Brimstone",
    element: <BrimstoneBind />,
  },  
    
  {
    path: "Pixel-Mapas-Bind-Fade",
    element: <FadeBind />,
  },  

  {
    path: "Pixel-Mapas-Bind-Kayo",
    element: <KayoBind />,
  },
  
  {
    path: "Pixel-Mapas-Bind-Killjoy",
    element: <KilljoyBind />,
  },  

  {
    path: "Pixel-Mapas-Bind-Phoenix",
    element: <PhoenixBind />,
  }, 
  
  {
    path: "Pixel-Mapas-Bind-Raze",
    element: <RazeBind />,
  },  

  {
    path: "Pixel-Mapas-Bind-Sage",
    element: <SageBind />,
  },  

  {
    path: "Pixel-Mapas-Bind-Sova",
    element: <SovaBind />,
  },  

  
  {
    path: "Pixel-Mapas-Bind-Viper",
    element: <ViperBind />,
  }, 
  
   
  {
    path: "Pixel-Mapas-Bind-Yoru",
    element: <YoruBind />,
  },  

  
  {
    path: "Pixel-Mapas-Breeze-Breach",
    element: <BreachBreeze />,
  },  

  
  
  {
    path: "Pixel-Mapas-Breeze-Brimstone",
    element: <BrimstoneBreeze />,
  },  
    
  {
    path: "Pixel-Mapas-Breeze-Fade",
    element: <FadeBreeze />,
  },  

  {
    path: "Pixel-Mapas-Breeze-Kayo",
    element: <KayoBreeze />,
  },
  
  {
    path: "Pixel-Mapas-Breeze-Killjoy",
    element: <KilljoyBreeze />,
  },  

  {
    path: "Pixel-Mapas-Breeze-Phoenix",
    element: <PhoenixBreeze />,
  }, 
  
  {
    path: "Pixel-Mapas-Breeze-Raze",
    element: <RazeBreeze />,
  },  

  {
    path: "Pixel-Mapas-Breeze-Sage",
    element: <SageBreeze />,
  },  

  {
    path: "Pixel-Mapas-Breeze-Sova",
    element: <SovaBreeze />,
  },  

  
  {
    path: "Pixel-Mapas-Breeze-Viper",
    element: <ViperBreeze/>,
  }, 
  
   
  {
    path: "Pixel-Mapas-Breeze-Yoru",
    element: <YoruBreeze />,
  },

  {
    path: "Pixel-Mapas-Fracture-Breach",
    element: <BreachFrac />,
  },  

  
  
  {
    path: "Pixel-Mapas-Fracture-Brimstone",
    element: <BrimstoneFrac />,
  },  
    
  {
    path: "Pixel-Mapas-Fracture-Fade",
    element: <FadeFrac />,
  },  

  {
    path: "Pixel-Mapas-Fracture-Kayo",
    element: <KayoFrac />,
  },
  
  {
    path: "Pixel-Mapas-Fracture-Killjoy",
    element: <KilljoyFrac />,
  },  

  {
    path: "Pixel-Mapas-Fracture-Phoenix",
    element: <PhoenixFrac />,
  }, 
  
  {
    path: "Pixel-Mapas-Fracture-Raze",
    element: <RazeFrac />,
  },  

  {
    path: "Pixel-Mapas-Fracture-Sage",
    element: <SageFrac />,
  },  

  {
    path: "Pixel-Mapas-Fracture-Sova",
    element: <SovaFrac />,
  },  

  
  {
    path: "Pixel-Mapas-Fracture-Viper",
    element: <ViperFrac/>,
  }, 
  
   
  {
    path: "Pixel-Mapas-Fracture-Yoru",
    element: <YoruFrac />,
  }, 
  
  {
    path: "Pixel-Mapas-Haven-Breach",
    element: <BreachHaven />,
  },  

  
  
  {
    path: "Pixel-Mapas-Haven-Brimstone",
    element: <BrimstoneHaven />,
  },  
    
  {
    path: "Pixel-Mapas-Haven-Fade",
    element: <FadeHaven />,
  },  

  {
    path: "Pixel-Mapas-Haven-Kayo",
    element: <KayoHaven />,
  },
  
  {
    path: "Pixel-Mapas-Haven-Killjoy",
    element: <KilljoyHaven />,
  },  

  {
    path: "Pixel-Mapas-Haven-Phoenix",
    element: <PhoenixHaven />,
  }, 
  
  {
    path: "Pixel-Mapas-Haven-Raze",
    element: <RazeHaven />,
  },  

  {
    path: "Pixel-Mapas-Haven-Sage",
    element: <SageHaven />,
  },  

  {
    path: "Pixel-Mapas-Haven-Sova",
    element: <SovaHaven />,
  },  

  
  {
    path: "Pixel-Mapas-Haven-Viper",
    element: <ViperHaven/>,
  }, 
  
   
  {
    path: "Pixel-Mapas-Haven-Yoru",
    element: <YoruHaven />,
  },

  {
    path: "Pixel-Mapas-Icebox-Breach",
    element: <BreachIce />,
  },  

  
  
  {
    path: "Pixel-Mapas-Icebox-Brimstone",
    element: <BrimstoneIce />,
  },  
    
  {
    path: "Pixel-Mapas-Icebox-Fade",
    element: <FadeIce />,
  },  

  {
    path: "Pixel-Mapas-Icebox-Kayo",
    element: <KayoIce />,
  },
  
  {
    path: "Pixel-Mapas-Icebox-Killjoy",
    element: <KilljoyIce />,
  },  

  {
    path: "Pixel-Mapas-Icebox-Phoenix",
    element: <PhoenixIce />,
  }, 
  
  {
    path: "Pixel-Mapas-Icebox-Raze",
    element: <RazeIce />,
  },  

  {
    path: "Pixel-Mapas-Icebox-Sage",
    element: <SageIce />,
  },  

  {
    path: "Pixel-Mapas-Icebox-Sova",
    element: <SovaIce />,
  },  

  
  {
    path: "Pixel-Mapas-Icebox-Viper",
    element: <ViperIce/>,
  }, 
  
   
  {
    path: "Pixel-Mapas-Icebox-Yoru",
    element: <YoruIce />,
  },  
  
  
  
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  
    <RouterProvider router={router} />  
    

    
    

  </React.StrictMode>
)
