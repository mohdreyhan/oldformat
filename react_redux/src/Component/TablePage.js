import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

export default class TablePage extends Component {
  render() {
    const { characterData, modalShow2, deleterec } = this.props;
    return (
      <div style={{ boxShadow: "2px 2px 2px grey" }}>
        <Table variant="dark" striped bordered hover size="sm" responsive="sm">
          <TableHeader />
          <TableBody
            characterData={characterData}
            modalShow2={modalShow2}
            deleterec={deleterec}
          />
        </Table>
      </div>
    );
  }
}

const TableBody = props => {
  const rows = props.characterData.map(row => {
    return (
      <tr key={row.Invoices_Id}>
        <td>{row.Invoices_Id}</td>
        <td>{row.Invoices_Company}</td>
        <td>{row.Invoices_Date}</td>
        <td>{row.Invoices_Cost}</td>
        <td>{row.Invoices_Discount}</td>
        <td>
          <Button
            style={{ marginRight: 5, cursor: "pointer" }}
            type="button"
            onClick={() => props.modalShow2(row)}
          >
            Edit
          </Button>
          <Button
            type="button"
            onClick={() => props.deleterec(row.Invoices_Id)}
            style={{ cursor: "pointer" }}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const TableHeader = () => {
  return (
    <thead style={{ backgroundColor: "#1890ff", color: "white" }}>
      <tr>
        <th>Invoice No</th>
        <th>Company</th>
        <th>Date</th>
        <th>Cost</th>
        <th>Dsicount</th>
        <th>Change</th>
      </tr>
    </thead>
  );
};
