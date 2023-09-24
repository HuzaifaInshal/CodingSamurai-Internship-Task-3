import './App.css'
import Nav from './pages/Nav'
import Home from './pages/Home'
import Listings from './pages/Listings'
import About from './pages/About'
import Contact from './pages/Contact'
import { useState,useEffect, useRef } from 'react'



function App() {
  const [abc,setAbc]=useState(true)
  const [hex,setHex] = useState({top:'30%',left:'40%'})
  const [hex1,setHex1] = useState({top:'40%',left:'47%'})
  const [hex2,setHex2] = useState({top:'43%',left:'49%'})
  const [hex3,setHex3] = useState({top:'44.5%',left:'50.4%'})

  const objectRef1 = useRef(null)
  const objectRef2 = useRef(null)
  const objectRef3 = useRef(null)

    useEffect(() => {
    const timer = setTimeout(() => {
      setHex({top:'30%',left:'60%'})
      setHex1({top:'75%',left:'50%'})
      setHex2({top:'80%',left:'80%'})
      setHex3({top:'10%',left:'20%'})
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

    useEffect(() => {
    const timer = setTimeout(() => {
      setAbc(false)
      document.body.style.overflowY = 'scroll'
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <div className='container'>
      <div className="hex" style={hex}></div>
      <div className="hex1" style={hex1} ref={objectRef1}></div>
      <div className="hex2" style={hex2} ref={objectRef2}></div>
      <div className="hex3" style={hex3} ref={objectRef3}></div>
    {!abc ? <>
      <Nav />
    <Home/>
    <Listings/>
    <About/>
    <Contact/> 
    </>: ''}
    </div>
  )
}

export default App
