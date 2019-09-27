import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { Card, CardDeck, Button } from "react-bootstrap";

export default function ItemSlider1() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div>
    <div style={{ padding: `0 ${chevronWidth}px` , color : "white", marginTop : 10}}>
      <div>
        <h4 style = {{color:"black"}}>New Arrivals</h4>
      </div>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={20}
        leftChevron={<Button>{"<"}</Button>}
        rightChevron={<Button>{">"}</Button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 300, width: 200 }}>
          <CardDeck>
            <Card style={{ backgroundColor: "#343a40" }}>
              <Card.Img variant="top" src={require("../images/card1.jpg")} />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  <small>Rating </small>
                  <br />
                  <small>Price </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <div style={{ height: 300, width: 200 }}>
          <CardDeck>
            <Card bg="secondary">
              <Card.Img variant="top" src={require("../images/card2.jpg")} />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  <small>Rating </small>
                  <br />
                  <small>Price </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <div style={{ height: 300, width: 200 }}>
          <CardDeck>
            <Card style={{ backgroundColor: "#343a40" }}>
              <Card.Img variant="top" src={require("../images/card3.jpg")} />
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  <small>Rating </small>
                  <br />
                  <small>Price </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <div style={{ height: 300, width: 200 }}>
          <CardDeck>
            <Card bg="secondary">
              <Card.Img variant="top" src={require("../images/card4.jpg")} />
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>
                  <small>Rating </small>
                  <br />
                  <small>Price </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <div style={{ height: 300, width: 200 }}>
          <CardDeck>
            <Card style={{ backgroundColor: "#343a40" }}>
              <Card.Img variant="top" src={require("../images/card5.jpg")} />
              <Card.Body>
                <Card.Title>Card 5</Card.Title>
                <Card.Text>
                  <small>Rating </small>
                  <br />
                  <small>Price </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <div style={{ height: 300, width: 200 }}>
          <CardDeck>
            <Card bg="secondary">
              <Card.Img variant="top" src={require("../images/card1.jpg")} />
              <Card.Body>
                <Card.Title>Card 6</Card.Title>
                <Card.Text>
                  <small>Rating </small>
                  <br />
                  <small>Price </small>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </ItemsCarousel>
    </div>
    </div>
  );
}
