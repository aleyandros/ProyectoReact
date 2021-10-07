import React, { Component } from "react";
import classes from "./Shop.module.css";
import Flight from "../flight/flight";
import axios from "axios";

class Shop extends Component {
  state = {
    flights: [],
  };

  fetchFlights = async () => {
    try {
      const response = await axios.get("/Flights");
      const flights = response.data.map((flight) => ({
        id: flight.id,
        title: flight.title,
        fromTo: flight.fromTo,
        price: flight.price,
        img: flight.img,
      }));
      this.setState({ flights });
    } catch (err) {
      console.error("There is an error!", err);
    }
  };

  componentDidMount() {
    this.fetchFlights();
  }

  render() {
    return (
      <div className={classes["bodyShop"]}>
        <div className={classes["head"]}>
          <h1> The best way to buy your flights </h1>
        </div>
        <div className={classes["contFlights"]}>
          <div className={classes["rowFlight"]}>
            {this.state.flights.map((flight) => (
              <Flight
                index={flight.index}
                title={flight.title}
                price={flight.price}
                fromTo={flight.fromTo}
                img={flight.img}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
