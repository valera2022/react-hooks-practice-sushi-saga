import React from "react";

function MoreButton({setBtn,btn}) {

 function handleClick(e){
  e.preventDefault()
  setBtn(btn+4)
 }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
