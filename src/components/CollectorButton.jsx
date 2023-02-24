import React, { useContext } from "react";
import StylesContext from "../StylesContext";



const CollectorButton = () => {
  const buttonStyling = useContext(StylesContext)
  
  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
    </div>
  );
}

export default CollectorButton
