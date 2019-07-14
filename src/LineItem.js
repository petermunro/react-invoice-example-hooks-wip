import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

let defaultInitialLineItemData = {
  quantity: 1,
  description: "",
  unitPrice: 0
};

const LineItem = ({
  id,
  initialLineItemData = defaultInitialLineItemData,
  onChange,
  onDelete
}) => {
  let [lineItemData, setLineItemData] = useState(initialLineItemData);
  useEffect(pushToCaller, [lineItemData]);

  function handleQuantityChange(e) {
    setLineItemData({ ...lineItemData, quantity: e.target.value });
  }

  function handleDescriptionChange(e) {
    setLineItemData({ ...lineItemData, description: e.target.value });
  }

  function handlePriceChange(e) {
    setLineItemData({ ...lineItemData, unitPrice: e.target.value });
  }

  function pushToCaller() {
    onChange(id, {
      quantity: parseInt(lineItemData.quantity, 10),
      description: lineItemData.description,
      unitPrice: parseFloat(lineItemData.unitPrice)
    });
  }

  function handleDeleteClick() {
    onDelete(id);
  }

  const { quantity, description, unitPrice } = lineItemData;
  return (
    <tr>
      <td>
        <input
          type="number"
          min="0"
          value={quantity}
          onChange={handleQuantityChange}
          className="pa2 mr2 f6"
        />
      </td>
      <td>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          className="pa2 mr2 f6"
        />
      </td>
      <td>
        <input
          type="text"
          data-column="5"
          value={unitPrice}
          onChange={handlePriceChange}
          className="pa2 mr2 f6"
        />
      </td>
      <td>
        <p className="pa2 mr2 f6">{quantity * unitPrice}</p>
      </td>
      <td>
        <button
          onClick={handleDeleteClick}
          className="f6 link dim ph3 pv1 mb2 dib white bg-dark-red bn"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

LineItem.propTypes = {
  id: PropTypes.number.isRequired,
  initialLineItemData: PropTypes.shape({
    quantity: PropTypes.number,
    description: PropTypes.string,
    unitPrice: PropTypes.number
  }),
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default LineItem;
