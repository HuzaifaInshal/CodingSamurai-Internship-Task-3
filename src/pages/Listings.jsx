import React, { useState } from 'react'
import { data } from '../data'

const Listings = () => {
  const [head1,seth1] = useState(null)
  const [para,setp] = useState(null)
  const [imga,setimg] = useState(null)
  const [art,setArt] = useState(false)
  function closeNav(){
    setArt(false)
    document.body.style.overflowY = 'scroll'
  }
  return (
    <>
  <div id="myNav" class="overlay" style={art ? {width:"100%"} : {width:"0%"}}>
  <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
  <div class="overlay-content">
    <img src={imga} alt="" className="art-img" />
    <h1 className='art-h1'>{head1}</h1>
    <p className='art-p'>{para}</p>
  </div>
</div>

    <section id='list'>
      <div className="list-contain">
      <div className="list">
        {data.map((lits)=>(<div to={"/article/1"} className='element' onClick={()=>{seth1(lits.title); setp(lits.para); setimg(lits.image_url); setArt(true); document.body.style.overflowY = 'hidden'}} >
          <div className="element0img" style={{ backgroundImage: `url(${lits.image_url})` }}></div>
          <div className="element-hide">
          <h1 className='element-hide-h1'>{lits.title}</h1>
          </div>
        </div>))}
      </div>
      </div>
    </section>
    </>
  )
}

export default Listings