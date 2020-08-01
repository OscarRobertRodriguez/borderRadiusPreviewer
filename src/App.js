import React, { useState } from "react";

import "./App.css";

function App() {
  const [borderRadius, setborderRadius] = useState(0);
  const [borderTopLeftRadius, setborderTopLeftRadius] = useState(0);
  const [borderTopRightRadius, setborderTopRightRadius] = useState(0);
  const [borderBottomLeftRadius, setborderBottomLeftRadius] = useState(0);
  const [borderBottomRightRadius, setborderBottomRightRadius] = useState(0);

  const boxStyle = {
    borderRadius: `${borderRadius}px`,
    borderTopLeftRadius: `${borderTopLeftRadius}px`,
    borderTopRightRadius: `${borderTopRightRadius}px`,
    borderBottomLeftRadius: `${borderBottomLeftRadius}px`,
    borderBottomRightRadius: `${borderBottomRightRadius}px`,
  };

  const code = `
    border-radius: ${borderRadius}px
    border-top-left-radius: ${borderTopLeftRadius}px;
    border-top-right-radius: ${borderTopRightRadius}px;
    border-bottom-left-radius: ${borderBottomLeftRadius}px;
    border-bottom-right-radius: ${borderBottomRightRadius}px;`
    ; 
    const displayText = () => {
      
    }

  const updateBorderHandler = (event, targetBorder) => {
    switch (targetBorder) {
      case "borderTopLeftRadius":
        setborderTopLeftRadius(event.target.value);
        break;
      case "borderTopRightRadius":
        setborderTopRightRadius(event.target.value);
        break;
      case "borderBottomLeftRadius":
        setborderBottomLeftRadius(event.target.value);
        break;
      case "borderBottomRightRadius":
        setborderBottomRightRadius(event.target.value);
        break;

      default:
        console.log("default");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <RadiusController
          border={"borderTopLeftRadius"}
          value={borderTopLeftRadius}
          updateBorder={updateBorderHandler}
        />
        <RadiusController
          border={"borderTopRightRadius"}
          value={borderTopRightRadius}
          updateBorder={updateBorderHandler}
        />
        <RadiusController
          border={"borderBottomLeftRadius"}
          value={borderBottomLeftRadius}
          updateBorder={updateBorderHandler}
        />
        <RadiusController
          border={"borderBottomRightRadius"}
          value={borderBottomRightRadius}
          updateBorder={updateBorderHandler}
        />
        <Box style={boxStyle} text={code} />
      </div>
    </div>
  );
}



export default App;

const Box = ({ style, text }) => {
  return (
    <div style={style} className="box">
      <textarea className="display" value={text}> 
      </textarea>
    </div>
  );
};

const RadiusController = ({ border, updateBorder, value }) => {
  return (
    <input
      className="control"
      value={value}
      onChange={(event) => updateBorder(event, border)}
    ></input>
  );
};
