import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";

export default class CardsPage extends Component {
  render() {
    return (
      <div style={{ color: "white" }}>
        <div style={{ paddingTop: 25 }}>
          <CardDeck>
            <Card style={{ backgroundColor: "#343a40" }}>
              <Card.Img variant="top" src={require("../images/card1.jpg")} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="secondary">
              <Card.Img variant="top" src={require("../images/card2.jpg")} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card style={{ backgroundColor: "#343a40" }}>
              <Card.Img variant="top" src={require("../images/card3.jpg")} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
        <div style={{ paddingTop: 25 }}>
          <CardDeck>
            <Card bg="secondary">
              <Card.Img variant="top" src={require("../images/card4.jpg")} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card style={{ backgroundColor: "#343a40" }}>
              <Card.Img variant="top" src={require("../images/card5.jpg")} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card bg="secondary">
              <Card.Img variant="top" src={require("../images/card5.jpg")} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small>Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}
