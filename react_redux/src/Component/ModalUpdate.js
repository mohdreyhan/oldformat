import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class MoadlUpdate extends Component {
  render() {
    const {
      modal2,
      recordToUpdate,
      onChangeupdate,
      update,
      rectoupdate,
      modalShow2
    } = this.props;
    return (
      <Modal show={modal2}>
        <Modal.Header>
          <Modal.Title>Invoice Data:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Invoice ID : {recordToUpdate.Invoices_Id}
          <br />
          <br />
          Invoices Company :
          <input
            type="text"
            placeholder={recordToUpdate.Invoices_Company}
            name="Invoices_Company"
            onChange={onChangeupdate}
          />
          <br />
          <br />
          Invoice Date :
          <input
            type="text"
            placeholder={recordToUpdate.Invoices_Date}
            name="Invoices_Date"
            onChange={onChangeupdate}
          />
          <br />
          <br />
          Invoice Cost :
          <input
            type="text"
            placeholder={recordToUpdate.Invoices_Cost}
            name="Invoices_Cost"
            onChange={onChangeupdate}
          />
          <br />
          <br />
          Invoice Discount :
          <input
            type="text"
            placeholder={recordToUpdate.Invoices_Discount}
            name="Invoices_Discount"
            onChange={onChangeupdate}
          />
          <br />
          <br />
          <Button
            style={{ marginRight: "15px" }}
            variant="primary"
            type="submit"
            onClick={() => update(rectoupdate)}
          >
            Save Changes
          </Button>
          <Button variant="primary" type="submit" onClick={modalShow2}>
            Close
          </Button>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    );
  }
}
