import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Container, Row, Col } from "react-bootstrap";
import TablePage from "./TablePage";
import ModalAdd from "./ModalAdd";
import ModalUpdate from "./ModalUpdate";
import CarouselPage from "./CarouselPage";
import NavbarPage from "./NavbarPage";
import CardsPage from "./CardsPage";
import FooterPage from "./FooterPage";
import ItemSlider1 from "./ItemSlider1";
import ItemSlider2 from "./ItemSlider2";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic : ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => {
        this.props.get(data);
      });
  }

  update = recordToUpdate => {
    fetch("http://localhost:3000/updateposts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recordToUpdate)
    });
    window.location.reload();
  };

  add = recordToAdd => {
    fetch("http://localhost:3000/addrecord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recordToAdd)
    });
    window.location.reload();
  };

  deleterec = recToDelete => {
    let url = "http://localhost:3000/recToDelete/" + recToDelete;
    fetch(url, {
      method: "POST"
    });
    window.location.reload();
  };

  navigatetologin = () =>
  {
    return (
      this.props.history.replace({
      pathname: "/"
    })
    )
  }


  cardvalues = () => {
    fetch("http://localhost:3000/cardvalues")
    .then(response => response.blob())
    .then(function(myBlob) {
      var objectURL = URL.createObjectURL(myBlob)
      var myImage = objectURL
      console.log("piccc==",myImage)
      this.setState({pic : myImage})
    });
    console.log("piccc==",this.state.pic)
  }


  render() {
    return (
      <div style={{ backgroundColor: "#dee2e6" }}>
        <NavbarPage 
        navigatetologin = {this.navigatetologin}
        />
        <Row style={{ backgroundColor: "#343a40" }}>
          <Col sm={1}></Col>
          <Col sm={10}>
            <CarouselPage />
          </Col>
          <Col sm={1}></Col>
        </Row>
        <Container>
          <Row>
            <Col sm={12}>
              <div style={{ paddingTop: 25 }}>
                <TablePage
                  characterData={this.props.data}
                  modalShow2={this.props.modalShow2}
                  deleterec={this.deleterec}
                />
              </div>
              <div style={{ paddingTop: 25, textAlign: "center" }}>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.props.modalShow1}
                >
                  Add
                </Button>
                <Button onClick = {this.cardvalues} />
              </div>
              <img src={this.state.pic} />
              <div>
                {/* <CardsPage /> */}
              </div>
              <div>
              <ItemSlider1 />
              </div>
              <div>
              <ItemSlider2 />
              </div>
              <ModalAdd
                modal1={this.props.modal1}
                onChangeadd={this.props.onChangeadd}
                add={this.add}
                addrecord={this.props.addrecord}
                modalShow1={this.props.modalShow1}
              />
              <ModalUpdate
                modal2={this.props.modal2}
                onChangeupdate={this.props.onChangeupdate}
                update={this.update}
                recordToUpdate={this.props.recordToUpdate}
                rectoupdate={this.props.rectoupdate}
                modalShow2={this.props.modalShow2}
              />
            </Col>
          </Row>
        </Container>
        <FooterPage />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    modal2: state.modal2,
    recordToUpdate: state.recordToUpdate,
    rectoupdate: state.rectoupdate,
    addrecord: state.addrecord,
    modal1: state.modal1
  };
}

function mapDispatchToProps(dispatch) {
  let recordToUpdate = [];

  return {
    get: data => {
      const action = { type: "GET", data };
      dispatch(action);
    },
    modalShow2: row => {
      recordToUpdate = row;
      const action = { type: "MODALSHOW2", recordToUpdate };
      dispatch(action);
    },
    onChangeupdate: event => {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      const action = { type: "ONCHANGEUPDATE", name, value };
      dispatch(action);
    },
    modalShow1: () => {
      const action = { type: "MODALSHOW1" };
      dispatch(action);
    },
    onChangeadd: event => {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      const action = { type: "ONCHANGEADD", name, value };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
