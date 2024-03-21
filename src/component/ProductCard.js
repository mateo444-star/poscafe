import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import capu from "../img/capu.png";
function ProductCard() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          width: "381px",
          height: "325px",
          left: "0px",
          top: "-19px",
        }}
      >
        {/* Rectangle 30 */}
        <div
          style={{
            position: "absolute",
            width: "381px",
            height: "325px",
            left: "228px",
            top: "305px",
            background: "#FFFFFF",
            borderRadius: "20px",
          }}
        >
          {/* Content */}
          <p
            style={{
              position: "absolute",
              width: "208.69px",
              height: "91.79px",
              left: "170px",
              top: "50px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "15px",
              display: "flex",
              alignItems: "center",
              color: "#827979",
            }}
          >
            A cappuccino is an espresso-based coffee drink that is traditionally
            prepared with steamed milk including a layer of milk foam.
          </p>
          <p
            style={{
              position: "absolute",
              width: "108.09px",
              height: "27.29px",
              left: "170px",
              top: "1px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              color: "#000000",
            }}
          >
            Cappucino
          </p>
          <p
            style={{
              position: "absolute",
              width: "61px",
              height: "27.29px",
              left: "300px",
              top: "1px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              color: "#BD507D",
            }}
          >
            $ 2.99
          </p>
        </div>
        {/* Rectangle 31 */}
        <div
          style={{
            position: "absolute",
            width: "139.13px",
            height: "223.28px",
            left: "240.84px",
            top: "318.65px",
            background: "#E0DFDF",
            borderRadius: "20px",
          }}
        >
          <img className="img" src={capu} />
          {/* Content */}
          <p
            style={{
              position: "absolute",
              width: "199.06px",
              height: "38.45px",
              left: "160px",
              top: "170px",
              fontSize: "16px",
            }}
          >
            <b>Size</b>
          </p>
          {/* Rectangle 32 */}{" "}
          <a href="#">
            <a href="#yy">
              <div
                style={{
                  position: "absolute",
                  width: "70.63px",
                  height: "38.45px",

                  left: "208px",
                  top: "177px",
                  background: "#BD507D",
                  borderRadius: "20px",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    width: "47.09px",
                    height: "22.33px",
                    left: "12.5px",
                    top: "-10px",

                    fontFamily: "",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "18px",
                    display: "flex",
                    alignItems: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Small
                </p>
              </div>{" "}
            </a>
          </a>
          {/* Rectangle 33 */}{" "}
          <a href="#large">
            <div
              style={{
                position: "absolute",
                width: "70.63px",
                height: "38.45px",
                left: "285px",
                top: "177px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "48.16px",
                  height: "22.33px",
                  left: "12.5px",
                  top: "-10px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "18px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                Large
              </p>
            </div>{" "}
          </a>
        </div>
        {/* + and - buttons */}

        <div>
          {" "}
          <a href="#plus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "253px",
                top: "565.45px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "36.24px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                <FaPlus />
              </p>
            </div>{" "}
          </a>{" "}
          {/* - */}
          <a href="#minus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "330px",
                top: "565.45px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "36.24px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                <FaMinus />
              </p>
            </div>{" "}
          </a>{" "}
          <a href="#minus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "292.5px",
                top: "566.45px",
                cursor: "auto",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                3
              </p>
            </div>{" "}
          </a>{" "}
          <a href="#minus">
            <div
              style={{
                position: "absolute",
                width: "183.01px",
                height: "57.06px",
                left: "399.24px",
                top: "553.09px",
                background: "#BD507D",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "124.15px",
                  height: "29.77px",
                  left: "30.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFEFE",
                }}
              >
                <FaCartShopping />
                Add to cart
              </p>
            </div>{" "}
          </a>
        </div>
      </div>
      {/* 2 */}
      <div
        style={{
          position: "absolute",
          width: "381px",
          height: "325px",
          left: "400px",
          top: "-19px",
        }}
      >
        {/* Rectangle 30 */}
        <div
          style={{
            position: "absolute",
            width: "381px",
            height: "325px",
            left: "228px",
            top: "305px",
            background: "#FFFFFF",
            borderRadius: "20px",
          }}
        >
          {/* Content */}
          <p
            style={{
              position: "absolute",
              width: "208.69px",
              height: "91.79px",
              left: "170px",
              top: "50px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "15px",
              display: "flex",
              alignItems: "center",
              color: "#827979",
            }}
          >
            A cappuccino is an espresso-based coffee drink that is traditionally
            prepared with steamed milk including a layer of milk foam.
          </p>
          <p
            style={{
              position: "absolute",
              width: "108.09px",
              height: "27.29px",
              left: "170px",
              top: "1px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              color: "#000000",
            }}
          >
            Cappucino
          </p>
          <p
            style={{
              position: "absolute",
              width: "61px",
              height: "27.29px",
              left: "300px",
              top: "1px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              color: "#BD507D",
            }}
          >
            $ 2.99
          </p>
        </div>
        {/* Rectangle 31 */}
        <div
          style={{
            position: "absolute",
            width: "139.13px",
            height: "223.28px",
            left: "240.84px",
            top: "318.65px",
            background: "#E0DFDF",
            borderRadius: "20px",
          }}
        >
          <img className="img" src={capu} />
          {/* Content */}
          <p
            style={{
              position: "absolute",
              width: "199.06px",
              height: "38.45px",
              left: "160px",
              top: "170px",
              fontSize: "16px",
            }}
          >
            <b>Size</b>
          </p>
          {/* Rectangle 32 */}{" "}
          <a href="#small">
            <div
              style={{
                position: "absolute",
                width: "70.63px",
                height: "38.45px",

                left: "208px",
                top: "177px",
                background: "#BD507D",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "47.09px",
                  height: "22.33px",
                  left: "12.5px",
                  top: "-10px",

                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "18px",
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFFFF",
                }}
              >
                Small
              </p>
            </div>{" "}
          </a>
          {/* Rectangle 33 */}{" "}
          <a href="#large">
            <div
              style={{
                position: "absolute",
                width: "70.63px",
                height: "38.45px",
                left: "285px",
                top: "177px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "48.16px",
                  height: "22.33px",
                  left: "12.5px",
                  top: "-10px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "18px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                Large
              </p>
            </div>{" "}
          </a>
        </div>
        {/* + and - buttons */}

        <div>
          {" "}
          <a href="#plus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "253px",
                top: "565.45px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "36.24px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                <FaPlus />
              </p>
            </div>{" "}
          </a>{" "}
          {/* - */}
          <a href="#minus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "330px",
                top: "565.45px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "36.24px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                <FaMinus />
              </p>
            </div>{" "}
          </a>{" "}
          <a href="#minus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "292.5px",
                top: "566.45px",
                cursor: "auto",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                3
              </p>
            </div>{" "}
          </a>{" "}
          <a href="#minus">
            <div
              style={{
                position: "absolute",
                width: "183.01px",
                height: "57.06px",
                left: "399.24px",
                top: "553.09px",
                background: "#BD507D",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "124.15px",
                  height: "29.77px",
                  left: "30.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFEFE",
                }}
              >
                <FaCartShopping />
                Add to cart
              </p>
            </div>{" "}
          </a>
        </div>
      </div>
      {/* 3 */}
      <div
        style={{
          position: "absolute",

          left: "0px",
          top: "330px",
        }}
      >
        {/* Rectangle 30 */}
        <div
          style={{
            position: "absolute",
            width: "381px",
            height: "325px",
            left: "228px",
            top: "305px",
            background: "#FFFFFF",
            borderRadius: "20px",
          }}
        >
          {/* Content */}
          <p
            style={{
              position: "absolute",
              width: "208.69px",
              height: "91.79px",
              left: "170px",
              top: "50px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "15px",
              display: "flex",
              alignItems: "center",
              color: "#827979",
            }}
          >
            A cappuccino is an espresso-based coffee drink that is traditionally
            prepared with steamed milk including a layer of milk foam.
          </p>
          <p
            style={{
              position: "absolute",
              width: "108.09px",
              height: "27.29px",
              left: "170px",
              top: "1px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              color: "#000000",
            }}
          >
            Cappucino
          </p>
          <p
            style={{
              position: "absolute",
              width: "61px",
              height: "27.29px",
              left: "300px",
              top: "1px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              color: "#BD507D",
            }}
          >
            $ 2.99
          </p>
        </div>
        {/* Rectangle 31 */}
        <div
          style={{
            position: "absolute",
            width: "139.13px",
            height: "223.28px",
            left: "240.84px",
            top: "318.65px",
            background: "#E0DFDF",
            borderRadius: "20px",
          }}
        >
          <img className="img" src={capu} />
          {/* Content */}
          <p
            style={{
              position: "absolute",
              width: "199.06px",
              height: "38.45px",
              left: "160px",
              top: "170px",
              fontSize: "16px",
            }}
          >
            <b>Size</b>
          </p>
          {/* Rectangle 32 */}{" "}
          <a href="#small">
            <div
              style={{
                position: "absolute",
                width: "70.63px",
                height: "38.45px",

                left: "208px",
                top: "177px",
                background: "#BD507D",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "47.09px",
                  height: "22.33px",
                  left: "12.5px",
                  top: "-10px",

                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "18px",
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFFFF",
                }}
              >
                Small
              </p>
            </div>{" "}
          </a>
          {/* Rectangle 33 */}{" "}
          <a href="#large">
            <div
              style={{
                position: "absolute",
                width: "70.63px",
                height: "38.45px",
                left: "285px",
                top: "177px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "48.16px",
                  height: "22.33px",
                  left: "12.5px",
                  top: "-10px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "18px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                Large
              </p>
            </div>{" "}
          </a>
        </div>
        {/* + and - buttons */}

        <div>
          {" "}
          <a href="#plus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "253px",
                top: "565.45px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "36.24px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                <FaPlus />
              </p>
            </div>{" "}
          </a>{" "}
          {/* - */}
          <a href="#minus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "330px",
                top: "565.45px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "36.24px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                <FaMinus />
              </p>
            </div>{" "}
          </a>{" "}
          <a href="#minus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "292.5px",
                top: "566.45px",
                cursor: "auto",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                3
              </p>
            </div>{" "}
          </a>{" "}
          <a href="#minus">
            <div
              style={{
                position: "absolute",
                width: "183.01px",
                height: "57.06px",
                left: "399.24px",
                top: "553.09px",
                background: "#BD507D",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "124.15px",
                  height: "29.77px",
                  left: "30.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFEFE",
                }}
              >
                <FaCartShopping />
                Add to cart
              </p>
            </div>{" "}
          </a>
        </div>
      </div>
      {/* 4 */}
      <div
        style={{
          position: "absolute",

          left: "400px",
          top: "330px",
        }}
      >
        {/* Rectangle 30 */}
        <div
          style={{
            position: "absolute",
            width: "381px",
            height: "325px",
            left: "228px",
            top: "305px",
            background: "#FFFFFF",
            borderRadius: "20px",
          }}
        >
          {/* Content */}
          <p
            style={{
              position: "absolute",
              width: "208.69px",
              height: "91.79px",
              left: "170px",
              top: "50px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "15px",
              display: "flex",
              alignItems: "center",
              color: "#827979",
            }}
          >
            A cappuccino is an espresso-based coffee drink that is traditionally
            prepared with steamed milk including a layer of milk foam.
          </p>
          <p
            style={{
              position: "absolute",
              width: "108.09px",
              height: "27.29px",
              left: "170px",
              top: "1px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              color: "#000000",
            }}
          >
            Cappucino
          </p>
          <p
            style={{
              position: "absolute",
              width: "61px",
              height: "27.29px",
              left: "300px",
              top: "1px",
              fontFamily: "",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "22px",
              display: "flex",
              alignItems: "center",
              color: "#BD507D",
            }}
          >
            $ 2.99
          </p>
        </div>
        {/* Rectangle 31 */}
        <div
          style={{
            position: "absolute",
            width: "139.13px",
            height: "223.28px",
            left: "240.84px",
            top: "318.65px",
            background: "#E0DFDF",
            borderRadius: "20px",
          }}
        >
          <img className="img" src={capu} />
          {/* Content */}
          <p
            style={{
              position: "absolute",
              width: "199.06px",
              height: "38.45px",
              left: "160px",
              top: "170px",
              fontSize: "16px",
            }}
          >
            <b>Size</b>
          </p>
          {/* Rectangle 32 */}{" "}
          <a href="#small">
            <div
              style={{
                position: "absolute",
                width: "70.63px",
                height: "38.45px",

                left: "208px",
                top: "177px",
                background: "#BD507D",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "47.09px",
                  height: "22.33px",
                  left: "12.5px",
                  top: "-10px",

                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "18px",
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFFFF",
                }}
              >
                Small
              </p>
            </div>{" "}
          </a>
          {/* Rectangle 33 */}{" "}
          <a href="#large">
            <div
              style={{
                position: "absolute",
                width: "70.63px",
                height: "38.45px",
                left: "285px",
                top: "177px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "48.16px",
                  height: "22.33px",
                  left: "12.5px",
                  top: "-10px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "18px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                Large
              </p>
            </div>{" "}
          </a>
        </div>
        {/* + and - buttons */}

        <div>
          {" "}
          <a href="#plus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "253px",
                top: "565.45px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "36.24px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                <FaPlus />
              </p>
            </div>{" "}
          </a>{" "}
          {/* - */}
          <a href="#minus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "330px",
                top: "565.45px",
                background: "#FFFFFF",
                border: "1px solid #E0DFDF",
                borderRadius: "36.24px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                <FaMinus />
              </p>
            </div>{" "}
          </a>{" "}
          <a href="#minus">
            {" "}
            <div
              style={{
                position: "absolute",
                width: "36.24px",
                height: "36.24px",
                left: "292.5px",
                top: "566.45px",
                cursor: "auto",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "9.63px",
                  height: "9.92px",
                  left: "12.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                3
              </p>
            </div>{" "}
          </a>{" "}
          <a href="#minus">
            <div
              style={{
                position: "absolute",
                width: "183.01px",
                height: "57.06px",
                left: "399.24px",
                top: "553.09px",
                background: "#BD507D",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  width: "124.15px",
                  height: "29.77px",
                  left: "30.5px",
                  top: "-7.5px",
                  fontFamily: "",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "20px",
                  lineHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  color: "#FFFEFE",
                }}
              >
                <FaCartShopping />
                Add to cart
              </p>
            </div>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
