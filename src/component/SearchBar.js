import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* Search */}
      <div
        style={{
          position: "absolute",
          width: "266px",
          height: "49px",
          left: "680px",
          top: "-105px",
          boxSizing: "border-box",
          background: "#E0DFDF",
          border: "1px solid #E0DFDF",
          borderRadius: "40px",
          paddingLeft: "10px", // Increased padding to accommodate the icon
          fontSize: "16px",
          lineHeight: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IoSearchOutline style={{ position: "absolute", left: "15px" }} />{" "}
        {/* Position the icon */}
        <input
          type="text"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "transparent",
            fontSize: "inherit",
            lineHeight: "inherit",
            outline: "none",
            paddingLeft: "25px", // Adjusted padding to center the placeholder text vertically
            zIndex: "2", // Ensure the input field is above the icon and placeholder
          }}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
