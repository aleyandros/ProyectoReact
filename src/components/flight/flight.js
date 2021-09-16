import { useState } from "react";
import classes from "./Flight.module.css";
export default function Flight(props) {
  const [priceEdited, setPriceEdited] = useState(props.price);
  const [timesAdded, setTimesAdded] = useState(1);
  const plus = () => {
    let auxCounter = timesAdded;
    if (timesAdded !== 0) {
      auxCounter++;
      setTimesAdded(auxCounter);
      setPriceEdited(props.price * auxCounter);
    }
  };
  const minus = () => {
    let auxCounter = timesAdded;
    if (timesAdded > 1) {
      auxCounter--;
      setTimesAdded(auxCounter);
      setPriceEdited(props.price * auxCounter);
    }
  };
  return (
    <div className={classes["flightCard"]}>
      <div className={classes["imageCard"]}>
        <img src={props.img} alt="Lugar" />
      </div>
      <div className={classes["infoCard"]}>
        <h2> {props.title} </h2>
        <p> {props.fromTo} </p>
        <p> {priceEdited}$ </p>
        <div className={classes["buttonGroup"]}>
          <input onClick={() => minus()} type="button" value="-" />
          <input onClick={() => plus()} type="button" value="+" />
          {timesAdded}
        </div>
      </div>
    </div>
  );
}
