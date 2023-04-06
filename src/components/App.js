import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [btn,setBtn] = useState(0)
  const [plates,setPlates] = useState([])
  const [precio,setPrecio] = useState("")
  const [money,setMoney]= useState(100)
  console.log(precio)
  console.log(plates)
  return (
    <div className="app">
      <SushiContainer btn ={btn} setBtn={setBtn}  setPlates ={setPlates} plates={plates} setPrecio={setPrecio} setMoney={setMoney} money={money}/>
      <Table plates={plates} precio={precio} money={money}/>
    </div>
  );
}

export default App;
