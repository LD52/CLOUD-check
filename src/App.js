import car from './images/auto.jpg'; 
import './App.css';
import cars from './images/cars.jpg'; 
import voiture from './images/voiture.jpg'; 
import pneu from './images/pneu.jpg'; 
import auto from './images/autho.jpg'; 


function App() {
  return (
    <>
    <div className="top"> GARAGE NAANA</div>

    <div className= "root">
  <div className="box-img"><img src={car} className="img"/>   </div> 
  <div className="box-img"><img src={cars} className="img"/></div>
  <div className="box-img"><img src={voiture} className="img"/> </div>
  <div className="box-img"><img src={pneu} className="img"/></div>
  <div className="box-img"><img src={auto} className="img"/></div>
   </div>
    <div className='map-box'> 
     <iframe 
     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15891.14322757993!2d-3.9728889!3d5.2960864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ef56a911b84b%3A0x3fcf579aaeabcd30!2sGarage%20SANAN%20nouvelle%20alliance!5e0!3m2!1sfr!2sci!4v1685717268876!5m2!1sfr!2sci"
     width="100%"
      height="450" 
      style= {{"border":"0;"}}
       allowfullscreen="" 
       border-radius="10px"
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade" /> </div>
  <div className='under-box'>
    Nous nous attendons à votre visite, nous règlerons votre problème en un rien de temps
  </div>






    
    </>
  )
  }

export default App; 
