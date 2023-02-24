import React, { useContext } from "react";
import StylesContext from "../StylesContext";

const RequestFormButton = () => {
  const buttonStyling = useContext(StylesContext)
  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
      <input type="submit" value="Submit" />

    </div>
  );
}

export default RequestFormButton