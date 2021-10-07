import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiTwitter } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

export const Footer = () => {
  return (
    <div className={classes["Container"]}>
      <div className={classes["subcontainer"]}></div>
      <div className={classes["icons1"]}>
        <div class={classes["icon-individually1"]}>
          <a href="https://www.facebook.com/">
            <FaFacebookF className={classes["fa-facebook"]} />
          </a>
        </div>

        <div class={classes["icon-individually1"]}>
          <a href="https://www.instagram.com/">
            <FiInstagram className={classes["fa-instagram"]} />
          </a>
        </div>

        <div class={classes["icon-individually1"]}>
          <a href="https://twitter.com/">
            <SiTwitter className={classes["fa-twitter"]} />
          </a>
        </div>

        <div class={classes["icon-individually1"]}>
          <a href="https://www.google.com/">
            <FcGoogle className={classes["fa-google"]} />
          </a>
        </div>
      </div>
      <span>YourFlights@gmail.com</span>
      <br />
      <span>@2021, Your Flights, proudly created by us </span>
    </div>
  );
};
