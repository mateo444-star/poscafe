import React from "react";

const CombinedStyles = ({ styles }) => {
  return (
    <>
      {styles.map((style, index) => (
        <div key={index} style={style}></div>
      ))}
    </>
  );
};

const App = () => {
  const styles = [
    {
      position: "absolute",
      width: "171px",
      height: "914.75px",
      left: "32px",
      top: "50px",
    },
    {
      position: "absolute",
      width: "135px",
      height: "24px",
      left: "32px",
      top: "50px",
      fontFamily: "",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "24px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: "#BD507D",
    },
    // Add other styles here...
    {
      position: "absolute",
      width: "6px",
      height: "50px",
      left: "197px",
      top: "142px",
      background: "#BD507D",
      borderRadius: "3px",
    },
  ];

  return (
    <div>
      <h1>My React App</h1>
      <CombinedStyles styles={styles} />
    </div>
  );
};

export default App;
