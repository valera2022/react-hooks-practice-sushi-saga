import React,{useEffect,useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({btn,setBtn,plates,setPlates,setPrecio,setMoney,money}) {
  const [sushi,setSushi]= useState([])
  

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
    .then(r=> r.json())
  .then(data=>setSushi(data))
  },[])


  return (
    <div className="belt">
      {sushi.map((sush)=> {if(sush.id > btn && sush.id < 5+btn ){
       console.log(sush)
       return <Sushi sush={sush} plates={plates} setPlates={setPlates} setPrecio={setPrecio} setMoney={setMoney} money={money}/>
      }})}
      <MoreButton setBtn={setBtn} btn={btn} />
    </div>
  );
}

export default SushiContainer;
