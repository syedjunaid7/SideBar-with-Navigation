import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import axios from "axios";
import CountUp from "react-countup";
import { TbExternalLink } from "react-icons/tb";
import { useNavigate } from "react-router";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Display from "../Display/Display";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashBoard() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();
  const data = {
    labels: [],
    datasets: [
      {
        data: [apiData.length, apiData.length + 10],
        backgroundColor: ["black", "red"],
        borderColor: ["black", "red"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };
  const options = {};
  useEffect(() => {
    axios
      .get("https://64aed895c85640541d4dd114.mockapi.io/user")
      .then((res) => {
        setApiData(res.data);
        console.log(res.data.length);
      });
  }, []);

  return (
    <div className="main">
      <h1>DashBoard</h1>
      <div className="main-sub-div">
        <div className="chart-div">
          <div className="link-head-div">
            <h3>Students and Parents</h3>
            <TbExternalLink
              className="link"
              size={17}
              onClick={(e) => {
                e.preventDefault();
                navigate("/display");
              }}
            />
          </div>
          <div style={{ width: "70%", height: "70%" }}>
            <Doughnut data={data} options={options} />
            <div className="student-card flexCenter">
              <div className="dot-main">
                <div className="dot2" />
                <h3>
                  <CountUp start={0} end={apiData.length} duration={4} />
                </h3>
                <p className="">Parents</p>
              </div>
              <div className="dot-main">
                <div className="dot" />
                <h3>
                  <CountUp start={0} end={apiData.length + 10} duration={4} />
                </h3>
                <p>Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
