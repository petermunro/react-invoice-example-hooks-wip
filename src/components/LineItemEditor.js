import React, { useState } from "react";
import LineItem from "./LineItem";
import LineItemModel from "./LineItemModel";

const LineItemEditor = ({ rowData: defaultRowData = [] }) => {
  let [rowData, setRowData] = useState(defaultRowData);

  function getTotal() {
    let grandTotal = 0;
    const rowTotals = rowData.map(row => {
      return Number(row.quantity) * Number(row.unitPrice);
    });
    if (rowTotals.length > 0) {
      grandTotal = rowTotals.reduce((acc, val) => acc + val);
    }
    return grandTotal;
  }

  function handleRowAdd() {
    setRowData([...rowData, new LineItemModel(0, "", 0)]);
  }

  function handleRowChange(data) {
    setRowData(rowData.map(row => (row.id === data.id ? data : row)));
  }

  function handleRowDelete(id) {
    setRowData(rowData.filter(row => row.id !== id));
  }

  const lineItemRows = rowData.map(lineItem => (
    <LineItem
      key={lineItem.id}
      id={lineItem.id}
      quantity={String(lineItem.quantity)}
      description={lineItem.description}
      unitPrice={String(lineItem.unitPrice)}
      onChange={handleRowChange}
      onDelete={handleRowDelete}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Description</th>
          <th>Unit Price</th>
          <th>Total</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {lineItemRows}
        <tr>
          <td />
          <td />
          <td />
          <td />
          <td>
            <button onClick={handleRowAdd} className="button-add">
              Add
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th />
          <th>Grand total:</th>
          <th>{getTotal()}</th>
          <th />
        </tr>
      </tfoot>
    </table>
  );
};

export default LineItemEditor;
