import React, { useState } from "react";
import "./App.css";
import LineItem from "./LineItem";

function App() {
  let initialLineItemData = {
    quantity: 3,
    desciption: "Widget",
    unitPrice: 8
  };

  let [lineItemData, setLineItemData] = useState(initialLineItemData);

  function handleChange(id, newLineItemData) {
    setLineItemData(newLineItemData);
  }

  return (
    <div className="App">
      <LineItem
        id={1}
        lineItemData={lineItemData}
        onChange={handleChange}
        onDelete={() =>
          setLineItemData({
            quantity: 0,
            desciption: "",
            unitPrice: 0
          })
        }
      />
    </div>
  );
}

export default App;
