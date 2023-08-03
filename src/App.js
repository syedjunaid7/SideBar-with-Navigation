import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Students from "./pages/Students/Students";
import DashBoard from "./pages/DashBoard/DashBoard";
import Table from "./pages/Display/DataTable";
import Display from "./pages/Display/Display";
import Update from "./pages/Update/Update";
import PopUp from "./pages/Display/PopUp";
import StudentsForm from "./Components/StudentsForm/StudentsForm";
import Footer from "./Components/Footer/Footer";
import Test from "./pages/Test/Test";
import SubMenu from "./Components/SubMenu/SubMenu";
import Class from "./pages/Class/Class";
import ClassRoutine from "./pages/Class/ClassRoutine";
import Subject from "./pages/Class/Subject";
import VirtualClassRoom from "./pages/Class/VirtualClassRoom";
import Admission from "./pages/Admission/Admission";
import Teacher from "./pages/Students/Teacher";
import Parents from "./pages/Students/Parents";
import Evaluation from "./pages/Student Evaluation/Evaluation";
import HomeWork from "./pages/HomeWork/HomeWork";
import Attendance from "./pages/Attendance/Attendance";
import FeePayment from "./pages/Attendance/FeePayment";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sub-app">
          <div className="left">
            <SideBar />
          </div>
          <div className="right">
            <Routes>
              <Route exact path="/" element={<DashBoard />} />
              <Route path="admission" element={<Admission />} />
              <Route path="/submenu" element={<SubMenu />} />
              <Route path="/class" element={<Class />} />
              <Route path="/class/routiteacherne" element={<ClassRoutine />} />
              <Route path="/class/virtual" element={<VirtualClassRoom />} />
              <Route path="/class/subject" element={<Subject />} />
              <Route path="/students" element={<Students />} />
              <Route path="/users/students" element={<Students />} />
              <Route path="/users/teacher" element={<Teacher />} />
              <Route path="/users/parents" element={<Parents />} />
              <Route path="/evaluation" element={<Evaluation />} />
              <Route path="/homework" element={<HomeWork />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/payment/fee" element={<FeePayment />} />
              <Route path="/display" element={<Display />} />
              <Route path="/update/:id" element={<Update />} />
              <Route path="/popmenu" element={<PopUp />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
