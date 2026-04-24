import bg from './assets/bg.jpg'
import logo from './assets/logo.PNG'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
     <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover",backgroundPosition: "center",minHeight: "100vh" }}>
     
      <div className="header d-flex justify-content-center">
        <img src={logo} alt="" className='p-1 logo' />
      </div>

      <div className='mt-5 pt-5 d-flex flex-column justify-content-center align-items-center'>
         <Link to={"https://chat.whatsapp.com/K5rV7hrYvr0AQQTyKe7YHQ?mode=gi_t"}><button className='btn W-25 mt-sm-3 mb-5' style={{backgroundColor:'rgb(223, 220, 8)', fontWeight:'bold'}}> JOIN FREE WHATSAPP CHANNEL</button></Link>
        <h2 className='text-light mt-3'>PROXIT WAYS</h2>
        <p>👇👇👇👇👇</p>
        <p className='text-light'>JOIN FREE WHATSAPP</p>
        <span className='text-light'>Get <span className='bg-success p-1 pb-2 px-2 rounded'>high-accuracy</span> signals for</span>
        <p className='mt-4 text-light'><span className='bg-primary text-light p-1 rounded'>NIFTY</span> I <span className=' text-light p-1 rounded' style={{backgroundColor:'rgb(10, 109, 30)'}}>BANKNIFTY</span> I <span className=' text-light p-1 rounded' style={{backgroundColor:'rgb(144, 4, 99)'}}>SENSEX</span></p>
        <span className='text-light p-1 rounded'style={{backgroundColor:'rgb(255, 0, 157)'}} >STOCK OPTION</span>
        <p className='mt-4 text-light'><span className=' text-light p-1 rounded' style={{backgroundColor:'rgb(28, 3, 142)'}}>FOREX</span> I <span className=' text-dark p-1 rounded' style={{backgroundColor:'rgb(223, 220, 8)'}}>GOLD (XAUUSD)</span> I <span className=' text-light p-1 rounded' style={{backgroundColor:'rgb(251, 108, 6)'}}>BTCUSD</span></p>
        <p className='text-light'>📈 95% Success Rate</p>
        <p className='text-light'>🔥 Join the Best in Global Forex Trading 💼</p>
        <p className='text-light'>✅ Daily 2-8 Signals </p>
        <p className='text-light'>✅ 24x7  Live Support </p>
        <p className='text-light'>👇 Click the button below 👇</p>
        <Link to={"https://chat.whatsapp.com/K5rV7hrYvr0AQQTyKe7YHQ?mode=gi_t"}><button className='btn W-25 mt-sm-3 mb-5' style={{backgroundColor:'rgb(223, 220, 8)', fontWeight:'bold'}}> JOIN FREE WHATSAPP CHANNEL</button></Link>
      </div>
      </div> 
    </>
  )
}

export default App
