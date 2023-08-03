import React from "react";
import { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router";
import "./StudentsForm.css";

export default function StudentsForm({ setDisplay }) {
  const [classes, setClasses] = useState("");
  const [rollNum, setRoll] = useState("");
  const [mName , setMname] = useState("");
  const [classSec, setClassSec] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const addData = (e) => {
    e.preventDefault();
    axios
      .post(`https://64aed895c85640541d4dd114.mockapi.io/user`, {
        classes,
        rollNum,
        mName,
        classSec,
        fname,
        lname,
        classes,
      })
      .then(() => {
        setFname("");
        setLname("");
        setClasses("");
        navigate("/students", { state: { shouldFetchData: true } });
        setDisplay(true)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="main-form top-padding">
      <form action="" onSubmit={addData}>
        <p
          style={{
            textAlign: "left",
            padding: "10px 0",
            fontWeight: "700",
            color: "rgb(170, 169, 169)",
            fontSize: "15px",
            textTransform: "uppercase",
          }}
        >
          Personal Information
        </p>
        <div className="main-form-cont">
          <div className="left-input">
            <div className="input-box">
              <input
                type="text"
                value={classes}
                required
                onChange={(e) => setClasses(e.target.value)}
              />
              <span>Class</span>
            </div>
            <div className="input-box">
              <input
                type="text"
                value={rollNum}
                required
                onChange={(e) => setRoll(e.target.value)}
              />
              <span>Roll Number*</span>
            </div>
            <div className="input-box">
              <input
                type="text"
                value={mName}
                required
                onChange={(e) => setMname(e.target.value)}
              />
              <span>Middle Name</span>
            </div>
            <div className="input-box-radio">
              <div
                className="input-box-personal-info"
                style={{ display: "flex", alignItems: "center", width: "29%" }}
              >
                <input
                  style={{ cursor: "pointer" }}
                  type="radio"
                  name="gender"
                  value="Male"
                  required
                  onChange={(e) => setClasses(e.target.value)}
                />
                <p>Male</p>
                <input
                  style={{ cursor: "pointer" }}
                  type="radio"
                  name="gender"
                  value="Female"
                  required
                  onChange={(e) => setClasses(e.target.value)}
                />
                <p>FeMale</p>
                <span>Gender*</span>
              </div>
            </div>
          </div>

          <div className="right-input">
            <div className="input-box">
              <input
                type="text"
                value={classSec}
                required
                onChange={(e) => setClassSec(e.target.value)}
              />
              <span>Class Section</span>
            </div>
            <div className="input-box">
              <input
                type="text"
                value={fname}
                required
                onChange={(e) => setFname(e.target.value)}
              />
              <span>First Name</span>
            </div>
            <div className="input-box">
              <input
                type="text"
                value={lname}
                required
                onChange={(e) => setLname(e.target.value)}
              />
              <span>Last Name</span>
            </div>
            <div style={{ position: "relative" }}>
              <div className="input-box-personal-info dob">
                <input
                  style={{ cursor: "pointer" }}
                  type="date"
                  value={classes}
                  required
                  onChange={(e) => setClasses(e.target.value)}
                />
                <span>Date of Birth*</span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <form action="" onSubmit={addData}>
        <p
          style={{
            textAlign: "left",
            padding: "15px 0",
            fontWeight: "700",
            color: "rgb(170, 169, 169)",
            fontSize: "15px",
            textTransform: "uppercase",
          }}
        >
          Contact Information
        </p>
        <div className="main-form-cont">
          <div className="right-input-contact">
            <div className="input-box">
              <input
                type="text"
                value={fname}
                required="required"
                onChange={(e) => setFname(e.target.value)}
              />
              <span>Address</span>
            </div>
            <div className="input-box">
              <input type="text" value={lname} required="required" />
              <span>State</span>
            </div>
            <div className="input-box-num2-main">
              <input
                type="text"
                value={"+1"}
                maxLength={5}
                style={{ width: "30%" }}
              />
              <div className="input-box-num2">
                <input type="number" value={classes} required />
                <span>Mobile Number</span>
              </div>
            </div>

            <div className="input-box">
              <input
                type="text"
                value={classes}
                required
                onChange={(e) => setClasses(e.target.value)}
              />
              <span>Phone</span>
            </div>
          </div>
          <div className="right-input-contact">
            <div className="input-box">
              <input
                type="text"
                value={classes}
                required
                onChange={(e) => setClasses(e.target.value)}
              />
              <span>City*</span>
            </div>
            <div className="input-box">
              <input
                type="text"
                value={fname}
                required
                onChange={(e) => setFname(e.target.value)}
              />
              <span>Zip Code*</span>
            </div>

            <div className="input-box-num2-main">
              <input
                type="text"
                value={"+1"}
                maxLength={5}
                required
                style={{ width: "30%" }}
              />
              <div className="input-box-num2">
                <input type="number" value={classes} required />
                <span>Alternate Number</span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <form action="" onSubmit={addData}>
        <p
          style={{
            textAlign: "left",
            padding: "15px 0",
            fontWeight: "700",
            color: "rgb(170, 169, 169)",
            fontSize: "15px",
            textTransform: "uppercase",
          }}
        >
          Login Information
        </p>
        <div className="main-form-cont">
          <div className="left-input">
            <div className="input-box">
              <input
                type="email"
                value={fname}
                required="required"
                onChange={(e) => setFname(e.target.value)}
              />
              <span>Email</span>
            </div>
          </div>
          <div className="left-input">
            <div className="input-box">
              <input
                type="password"
                required
                minlength="8"
                value={classes}
                onChange={(e) => setClasses(e.target.value)}
              />
              <span>Password</span>
            </div>
          </div>
        </div>
      </form>
      <form action="" onSubmit={addData}>
        <p
          style={{
            textAlign: "left",
            padding: "15px 0",
            fontWeight: "700",
            color: "rgb(170, 169, 169)",
            fontSize: "15px",
            textTransform: "uppercase",
          }}
        >
          Profile Image
        </p>
        <div style={{ width: "50%" }}>
          <div className="profile-cont ">
            <div className="input-box">
              <input
                id="real-file"
                type="file"
                required="required"
                onChange={(e) => setFname(e.target.value)}
              />
              {/* <button type="button" id="custom-btn">
                Choose File
              </button>
              <span id="cutom-txt">No file chosen, yet</span> */}
            </div>
            <img
              style={{ width: "25%" }}
              src="https://school.pushnifty.com/wp-content/plugins/school-management/assets/images/thumb_icon/Student.png"
            />
          </div>
        </div>
      </form>
      <form action="" onSubmit={addData}>
        <p
          style={{
            textAlign: "left",
            paddingTop: "35px",
            fontWeight: "700",
            color: "rgb(170, 169, 169)",
            fontSize: "15px",
            textTransform: "uppercase",
          }}
        >
          Custom Fields
        </p>
        <div style={{ width: "50%" }}>
          <div className="profile-cont profile-cont2">
            <div className="input-box">
              <input
                type="text"
                value={fname}
                required
                onChange={(e) => setFname(e.target.value)}
              />
              <span>Custom Fields</span>
            </div>
            <div className="btn-type" onClick={addData}>ADD STUDENT</div>
          </div>
        </div>
      </form>
    </div>
  );
}
