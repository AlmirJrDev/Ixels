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
                <a className='card-menu' href={'Setup-Mapa'}>Mapa</a>


              </div>
              <div className='div-card'>
                <a className='card-menu' href="">Agente</a>
           
              </div>
              <div className='div-card'>
                <a  className='card-menu' href="">Habilidade</a>
              
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
