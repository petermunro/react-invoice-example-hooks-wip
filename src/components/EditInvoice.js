import React, { Component } from "react";
import Address from "./Address";
import LineItemEditor from "./LineItemEditor";
import LineItemModel from "./LineItemModel";
import "./EditInvoice.css";

class EditInvoice extends Component {
  render() {
    const mockAddress = {
      line1: "16 The Harbor",
      town: "Newport",
      county: "Gwent",
      country: "Wales"
    };

    const mockLineItems = [
      new LineItemModel(3, "Special annodized widgets", 38.0),
      new LineItemModel(2, "Erusticated thorbstrobblers", 146.0)
    ];

    return (
      <div>
        <h1>Edit Invoice</h1>
        <Address address={mockAddress} />
        <LineItemEditor rowData={mockLineItems} />
        <br />
        <br />
      </div>
    );
  }
}

export default EditInvoice;
