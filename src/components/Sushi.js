import React,{useState} from "react";

function Sushi({sush,plates,setPlates,setPrecio,setMoney,money}) {
  const{id,name,img_url,price,created_at} = sush
  const [isOff,setState]= useState(false)

  function handleClick(e){
    if(price < money){
      setState(!isOff) 
      console.log("You need to use state(const [isOff,setState]= useState(false)) with this snippet and control input(button,etc) with a ternary condition(isOff? <button>off</button : <button>on</button>") 
      console.log(e.target)
      setPlates([...plates,e.target])
      setPrecio(price)
     
      setMoney(money -price)
      }
        }

  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isOff ? null : (
          <img
            src={img_url }
            alt={/* Give me a name! */ "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
