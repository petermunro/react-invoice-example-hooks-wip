import id from "../util/id";

export default class LineItemModel {
  constructor(quantity, description, unitPrice) {
    this.id = id();
    this.quantity = quantity;
    this.description = description;
    this.unitPrice = unitPrice;
  }

  get subTotal() {
    return Number(this.quantity) * Number(this.unitPrice);
  }
}
