import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [classes, setClasses] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);

    axios
      .get(`https://64aed895c85640541d4dd114.mockapi.io/user/${id}`)
      .then((res) => {
        const userData = res.data;
        setFname(userData.fname);
        setLname(userData.lname);
        setClasses(userData.classes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const submit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .put(`https://64aed895c85640541d4dd114.mockapi.io/user/${id}`, {
        fname,
        lname,
        classes,
      })
      .then(() => {
        navigate("/display", { state: { shouldFetchData: true } });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="edit-div">
      <form className="flexCenter" onSubmit={submit}>
        <h1>Edit Details</h1>
        <label>First Name</label>
        <input
          placeholder="Name"
          type="text"
          required="required"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <label>Last Name</label>
        <input
          placeholder="Mobile No"
          required="required"
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <label>Class</label>
        <input
          placeholder="Class"
          required="required"
          type="text"
          value={classes}
          onChange={(e) => setClasses(e.target.value)}
        />
        <button className="submit-btn" type="submit" onClick={submit}>
          {isLoading ? (
            <div className="loader">
              Update
              <ClipLoader size={20} color="white" />
            </div>
          ) : (
            "Update"
          )}
        </button>
      </form>
    </div>
  );
}

export default Update;
