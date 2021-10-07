import classes from "./Home.module.css";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes["home"]}>
      <div className={classes["Container"]}>
        <h1 className={classes["title"]}>Your Flights</h1>
      </div>
      <div className={classes["phrase1"]}>
        <span>Gracias a ti somos la mejor opción para recorrer el mundo!</span>
      </div>
      <div className={classes["phrase2"]}>
        <span>Conoce y elige un lugar para viajar</span>
      </div>
      <div className={classes["ImagesContainer1"]}>
        <div className={classes["Img1"]}></div>
        <div className={classes["Container2"]}>
          <div className={classes["msgcontainer"]}>
            <div className={classes["msg1container"]}>
              <h1 className={classes["msg"]}>Conoce y explora!</h1>
              <br />
              <Link to="/Shop">
                <button className={classes["btn"]}>Viajar</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes["Img2"]}></div>
      </div>
      <div className={classes["phrase3"]}>
        <span>
          Compra con Tu Tarjeta Flight y acumula el 10% de tus millas en puntos
        </span>
      </div>
      <div className={classes["shop"]}>
        <Link to="/Shop">
          <button className={classes["btn"]}>Comprar ahora</button>
        </Link>
      </div>
      <div className={classes["ImagesContainer"]}>
        <div className={classes["Container3"]}></div>
        <div className={classes["Container4"]}></div>
        <div className={classes["Container5"]}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
