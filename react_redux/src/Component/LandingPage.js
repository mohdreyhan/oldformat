import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import ModalsignUp from "./ModalsignUp";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signerrmsg: "",
      loginerrmsg: ""
    };
  }
  signup = addtouser => {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addtouser)
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 200) {
          return this.props.history.replace({
            pathname: "/"
          });
        } else if (response.status === 400) {
          this.setState({ signerrmsg: response.message });
        }
      });
  };

  loginVerify = verifyuser => {
    fetch("http://localhost:3000/loginVerify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(verifyuser)
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 200) {
          return this.props.history.replace({
            pathname: "/home"
          });
        } else if (response.status === 400) {
          this.setState({ loginerrmsg: response.message });
        }
      });
  };

  render() {
    return (
      <div >
        <Container>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <ModalLogin
                modalSignup={this.props.modalSignup}
                modalLoginShow={this.props.modalLoginShow}
                verifyuser={this.props.verifyuser}
                onChangeverify={this.props.onChangeverify}
                loginVerify={this.loginVerify}
                loginerrmsg={this.state.loginerrmsg}
              />
              <ModalsignUp
                modalsignupShow={this.props.modalsignupShow}
                modalLogin={this.props.modalLogin}
                onChangesignup={this.props.onChangesignup}
                addtouser={this.props.addtouser}
                signup={this.signup}
                signerrmsg={this.state.signerrmsg}
              />
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalLoginShow: state.modalLoginShow,
    modalsignupShow: state.modalsignupShow,
    addtouser: state.addtouser,
    verifyuser: state.verifyuser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalLogin: (logincondition, signupcondition) => {
      const action = { type: "MODALLOGIN", logincondition, signupcondition };
      dispatch(action);
    },
    modalSignup: (signupcondition, logincondition) => {
      const action = { type: "MODALSIGNUP", signupcondition, logincondition };
      dispatch(action);
    },
    onChangesignup: event => {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      const action = { type: "ONCHANGESIGNUP", name, value };
      dispatch(action);
    },
    onChangeverify: event => {
      event.preventDefault();
      const name = event.target.name;
      const value = event.target.value;
      const action = { type: "ONCHANGEVERIFY", name, value };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
