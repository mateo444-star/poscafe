import React from "react";
import "./app.css";
import { HiOutlineLogin } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { BiSolidBookmarks } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { BiDonateHeart } from "react-icons/bi";
import { SiOracle } from "react-icons/si";
const Leftbar = () => {
  return (
    <div className="left">
      <button className="logo">
        {" "}
        <a className="login-link" style={{ fontSize: "80px" }}>
          <SiOracle />
        </a>
      </button>
      <button className="home">
        {" "}
        <a className="login-link" style={{ fontSize: "24px" }}>
          <FaHome />
        </a>
        <a>Home</a>
      </button>

      <button className="menu">
        {" "}
        <a className="login-link" style={{ fontSize: "24px" }}>
          <BsMenuButtonWideFill />
        </a>
        <a className="padding"> Menu</a>
      </button>
      <button className="myorders">
        {" "}
        <a className="login-link" style={{ fontSize: "24px" }}>
          <BiSolidBookmarks />
        </a>
        <a>Orders</a>
      </button>
      <button className="history">
        {" "}
        <a className="login-link" style={{ fontSize: "24px" }}>
          <FaHistory />
        </a>
        <a>Histoy</a>
      </button>
      <button className="partners">
        {" "}
        <a className="login-link" style={{ fontSize: "24px" }}>
          <FaHandshakeSimple />
        </a>
        <a>Partners</a>
      </button>
      <button className="setting">
        {" "}
        <a className="login-link" style={{ fontSize: "24px" }}>
          <VscSettings />
        </a>
        <a>Setting</a>
      </button>
      <button className="donation">
        {" "}
        <a className="login-link" style={{ fontSize: "24px" }}>
          <BiDonateHeart />
        </a>
        <a>Donation</a>
      </button>
      <button className="logout">
        {" "}
        <a className="login-link" style={{ fontSize: "24px" }}>
          <HiOutlineLogin />
        </a>
        <a>LogOut</a>
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <Leftbar />
    </div>
  );
};

export default App;
