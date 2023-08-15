import dividerB from ".//assets/images/pattern-divider-desktop.png";
import dividerS from "./assets/images/pattern-divider-mobile.png"
import dice from "./assets/images/icon-dice.png"
import "./App.css"
import { useEffect, useState } from "react";

export const App = () => {

  const [adv, setAdv] = useState([])

  const fetchData = async () => {
    fetch("https://api.adviceslip.com/advice")
    .then(resp =>  resp.json())
    .then(data => {const {slip} = data;
    setAdv(slip)})
  }

  useEffect(() => {
    fetchData()
  }, [])
    



  return (
    <>
      <div className="container">
        <p className="id">Advice # {adv.id}</p>
        <h3 className="advice">"{adv.advice}"</h3>
        <img src={dividerB} alt="divider" id="divider"/>
        <button className="btn" onClick={fetchData}
        ><img src={dice} alt="dice" id="btnI"/></button>
        
      </div>
    </>
  )
}
