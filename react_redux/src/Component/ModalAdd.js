import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class ModalAdd extends Component {
  render() {
    const { modal1, onChangeadd, add, addrecord, modalShow1 } = this.props;
    return (
      <Modal show={modal1}>
        <Modal.Header>
          <Modal.Title>Invoice Data:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Invoice ID :
          <input
            type="text"
            placeholder="Enter Invoice Id"
            name="Invoices_Id"
            onChange={onChangeadd}
          />
          <br />
          <br />
          Invoices Company :
          <input
            type="text"
            placeholder="Enter Invoice Company"
            name="Invoices_Company"
            onChange={onChangeadd}
          />
          <br />
          <br />
          Invoice Date :
          <input
            type="text"
            placeholder="Enter Invoice Date"
            name="Invoices_Date"
            onChange={onChangeadd}
          />
          <br />
          <br />
          Invoice Cost :
          <input
            type="text"
            placeholder="Enter Invoice Cost"
            name="Invoices_Cost"
            onChange={onChangeadd}
          />
          <br />
          <br />
          Invoice Discount :
          <input
            type="text"
            placeholder="Enter Invoice Discount"
            name="Invoices_Discount"
            onChange={onChangeadd}
          />
          <br />
          <br />
          <Button
            style={{ marginRight: "15px" }}
            variant="primary"
            type="submit"
            onClick={() => add(addrecord)}
          >
            Save Changes
          </Button>
          <Button variant="primary" type="submit" onClick={modalShow1}>
            Close
          </Button>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    );
  }
}
