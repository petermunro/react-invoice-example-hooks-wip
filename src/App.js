import React, { useState } from "react";
import "./App.css";
import LineItem from "./LineItem";

function App() {
  let initialLineItemData = {
    quantity: 3,
    description: "Widget",
    unitPrice: 8
  };

  let [lineItemData, setLineItemData] = useState(initialLineItemData);

  function handleChange(id, newLineItemData) {
    setLineItemData(newLineItemData);
  }

  return (
    <div className="App">
      <table>
        <tbody>
          <LineItem
            id={1}
            initialLineItemData={lineItemData}
            onChange={handleChange}
            onDelete={() =>
              setLineItemData({
                quantity: 0,
                desciption: "",
                unitPrice: 0
              })
            }
          />
        </tbody>
      </table>
      <ul>
        <li>Quantity: {lineItemData.quantity}</li>
        <li>Description: {lineItemData.description}</li>
        <li>Unit Price: {lineItemData.unitPrice}</li>
      </ul>
    </div>
  );
}

export default App;
