import "./Display.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
import { useNavigate } from "react-router-dom";
import PopUp from "./PopUp";

function Display({ filteriData, inputVal }) {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://64aed895c85640541d4dd114.mockapi.io/user")
      .then((res) => {
        setApiData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };
  const handleOption = (index) => {
    console.log(index);
  };
  return (
    <div className="table-cont flexCenter">
      {isLoading ? (
        <div className="cont-load" key={id}>
          <RingLoader size={100} color="#131c9c" />
        </div>
      ) : (
        (inputVal === "" ? apiData : filteriData).map((item, id) => (
          <div key={id} style={{ width: "100%" }}>
            <div className="list-main-div">
              <div className="list-left-box">
                <img
                  style={{ width: "10%" }}
                  src="https://school.pushnifty.com/wp-content/plugins/school-management/assets/images/thumb_icon/Student.png"
                />
                <div>
                  <h5>
                    {item.fname} {item.mName} {item.lname}
                  </h5>
                  <p>austinebebeyi@gmail.com</p>
                </div>
              </div>
              <div className="list-ryt-box">
                <p>{item.rollNum}</p>
                <p>{item.classes}</p>
                <p>{item.classSec}</p>
              </div>
              <div className="dots-cont" onClick={() => handleOption(id)}>
                <img src="https://school.pushnifty.com/wp-content/plugins/school-management/assets/images/listpage_icon/More.png" />
                <div className="pop-option">
                  <p>View</p>
                  <p>View Results</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Display;
