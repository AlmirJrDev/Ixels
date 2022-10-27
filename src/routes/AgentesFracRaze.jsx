import '../app.css'


export default function App() {


  return (
   

      
        <div className="left">
           
        <header>
    
       
        <img className='back' src="../src/assets/valorantback.webp" alt="" />
            
    
        </header>
    
        
        <div className="sidebar">
        <img className='logo' src="../src/assets/valorant.png" alt="" srcset="" />  
          <a  href={'Home'} className="menu-item "><span><i className="uil uil-home"></i></span>
            <h3>Home</h3>
          </a>
          <a href={'Pixel'} className="menu-item"><span><i className="uil uil-compass"></i></span>
            <h3>Pixel</h3>
          </a>
      
          <a href={'Setup'} className="menu-item"><span><i className="uil uil-bookmark"></i></span>
            <h3>Setup</h3>
          </a>
          <a href={'Reticulas'} className="menu-item"><span><i className="uil uil-chart-line"></i></span>
            <h3>Reticulas</h3>
          </a>
      
          <a href="#" className="menu-item active"><span><i className="uil uil-setting"></i></span>
            <h3>More</h3>
          </a>
    
        </div>
    
        <main>
          <div className="container">
            
            <div className='nav'> 
            <div className='div-card'>
                <a className='card-menu' href={'Pixel'}>Mapa</a>
                <div className='menu-select'>
                  <li>
                    <ul>
                    <a className='link-menu' href={"Pixel-Mapas-Ascent"}>Ascent</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Bind"}>Bind</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Breeze"}>Breeze</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Fracture"}>Fracture</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Haven"}>Haven</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Icebox"}>Icebox</a>
                    <br /> 
                    <a className='link-menu' href={"Pixel-Mapas-Pearl"}>Pearl</a> 
                    </ul>
                  </li> 


                </div>

              </div>
              <div className='div-card'>
                <a className='card-menu' href={"Pixel-Mapas-Fracture"}>Agente</a>
                <div className='menu-select'>
                <li>
                  <ul>
                  
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Breach"}>Breach</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Brimstone"}>Brimstone</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Fade"}>Fade</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Kayo"}>KAY/O</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Killjoy"}>Killjoy</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Phoenix"}>Phoenix</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Sage"}>Sage</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Sova"}>Sova</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Raze"}>Raze</a>
                    <br />  
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Viper"}>Viper</a>
                    <br />
                    <a className='link-menu' href={"Pixel-Mapas-Fracture-Yoru"}>Yoru</a>
                    </ul>
                  </li>


                </div>
           
              </div>
              <div className='div-card'>
                <a  className='card-menu' href="">Habilidade</a>
                <div className='menu-select'>
                <li>
                  <ul>
                    <a className='link-menu' href="#">Carga de Explosivos (Q)</a>
                    <br />
                    <a className='link-menu' href="#">Cartuchos de Tinta (E)</a>
                    <br />
                    <a className='link-menu' href="#">Estraga-Prazeres (X)</a>
                    <br />
                    
                    </ul>
                  </li>


                </div>
                
              
              </div>
              <div className='div-card'>
                <a className='card-menu' href="">Lados</a>
               
              </div>
              <div className='div-card'>
                <a className='card-menu' href="">Dificuldade</a>
             
              </div>
        
            </div>
            
            
          </div>
        </main>
      
       
      


      </div>

    
      
    


  );
}
