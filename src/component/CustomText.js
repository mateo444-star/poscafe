import React from "react";

const CustomText = ({ style, text }) => {
  return <div style={style}>{text}</div>;
};

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <CustomText
        style={{
          position: "absolute",
          width: "74px",
          height: "20px",
          left: "929px",
          top: "247px",
          fontFamily: "",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "20px",
          display: "flex",
          alignItems: "center",
          color: "#000000",
        }}
        text="All result"
      />
      <CustomText
        style={{
          position: "absolute",
          width: "78px",
          height: "49px",
          left: "236px",
          top: "228px",
          fontFamily: "",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "40px",
          lineHeight: "49px",
          display: "flex",
          alignItems: "center",
          color: "#BD507D",
        }}
        text="ALL"
      />
      <CustomText
        style={{
          position: "absolute",
          width: "254px",
          height: "59px",
          left: "233px",
          top: "33px",
          fontFamily: "",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "30px",
          lineHeight: "37px",
          display: "flex",
          alignItems: "center",
          color: "#000000",
        }}
        text="Welcome to LOGO’ Name"
      />
    </div>
  );
};

export default App;
