import React, { useState } from "react";




function Item({ name, category }) {

  

  const [item ,setItem] = useState(false)
  function RemoveAdd(){
     setItem((item) => !item);
     
      
  }

  const buttonVir = item ? "Add To cart" : "Remove From Cart"
  const color = item ? "yellow" : "purple"

  
  
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{background :color}} onClick={RemoveAdd} className="add">{buttonVir}</button>
    </li>
  );
}

export default Item;