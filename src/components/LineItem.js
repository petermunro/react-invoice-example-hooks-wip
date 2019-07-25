import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LineItem = ({
  id,
  quantity: defaultQuantity = 1,
  description: defaultDescription = "",
  unitPrice: defaultUnitPrice = 0,
  onChange,
  onDelete
}) => {
  let [quantity, setQuantity] = useState(defaultQuantity);
  let [description, setDescription] = useState(defaultDescription);
  let [unitPrice, setUnitPrice] = useState(defaultUnitPrice);

  // useEffect(pushToCaller, [quantity, description, unitPrice]);
  // useEffect(() => {
  //   function pushToCaller() {
  //     onChange({
  //       id,
  //       quantity,
  //       description,
  //       unitPrice
  //     });
  //   }

  //   pushToCaller()
  // },
  //   [description, quantity, unitPrice]
  //   // [description, id, onChange, quantity, unitPrice]
  // );

  function pushToCaller() {
    onChange(id, quantity, description, unitPrice);
  }

  console.log("li");
  return (
    <tr>
      <td>
        <input
          type="number"
          min="0"
          size={4}
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={description}
          size="60"
          onChange={e => setDescription(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          data-column="5"
          value={unitPrice}
          onChange={e => setUnitPrice(e.target.value)}
        />
      </td>
      <td>
        <p>{Number(quantity) * Number(unitPrice)}</p>
      </td>
      <td>
        <button onClick={() => onDelete(id)} className="button-delete">
          Delete
        </button>
      </td>
    </tr>
  );
};

LineItem.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.string,
  description: PropTypes.string,
  unitPrice: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default LineItem;
