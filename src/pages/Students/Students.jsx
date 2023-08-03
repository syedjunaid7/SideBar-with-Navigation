import { NavLink } from "react-router-dom";
import "./Students.css";
import { Outlet, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Display from "../Display/Display";
import StudentsForm from "../../Components/StudentsForm/StudentsForm";
import SearchBar from "../../Components/SearchBar/SearchBar";
import axios from "axios";

function Students() {
  const [display, setDisplay] = useState(true);
  const [data, setData] = useState([]);
  const [filteriData, setFilterData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://64aed895c85640541d4dd114.mockapi.io/user")
      .then((res) => {
        setFilterData(res.data);
        setData(res.data);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      {display ? (
        <div className="top-padding">
          <div className=" d-none">
            <div className="top-stu">
              <div className="left-stu">
                <h3>Student</h3>
                <NavLink to="studentsform" style={{ display: "flex" }}>
                  <img
                    onClick={() => setDisplay(false)}
                    src="https://d1k5j68ob7clqb.cloudfront.net/processed/thumb/sXuXm1hIr8597Dzy77.png"
                  />
                </NavLink>
              </div>
              <div className="right-stu">
                <img src="https://school.pushnifty.com/wp-content/plugins/school-management/assets/images/dashboard_icon/Bell-Notification.png" />
                <img src="https://school.pushnifty.com/wp-content/plugins/school-management/assets/images/thumb_icon/Teacher.png" />
              </div>
            </div>
            <SearchBar filteriData={filteriData} setFilterData={setFilterData} inputVal={inputVal} setInputVal={setInputVal} data={data}/>
          </div>
          <Display  filteriData={filteriData} inputVal={inputVal}/>
        </div>
      ) : (
        <div>
          <div className="top-stu" style={{ padding: "0 25px" }}>
            <div className="left-stu">
              <img
                style={{ width: "20px", cursor: "pointer" }}
                onClick={() => {
                  setDisplay(true);
                  navigate("/students");
                }}
                src="https://school.pushnifty.com/wp-content/plugins/school-management/assets/images/listpage_icon/Back_Arrow.png"
              />
              <h3>Add Student</h3>
            </div>
            <div className="right-stu">
              <img src="https://school.pushnifty.com/wp-content/plugins/school-management/assets/images/dashboard_icon/Bell-Notification.png" />
              <img src="https://school.pushnifty.com/wp-content/plugins/school-management/assets/images/thumb_icon/Teacher.png" />
            </div>
          </div>
          <StudentsForm setDisplay={setDisplay} />
        </div>
      )}
    </div>
  );
}

export default Students;
