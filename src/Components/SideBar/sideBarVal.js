import { RxDashboard } from "react-icons/rx";
import { GrUserManager } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudentDuotone } from "react-icons/pi";
import { SiReacthookform } from "react-icons/si";
import { BiChevronRight } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { BsBookmarkCheck } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";

const sideBarVal = [
  {
    icon1: <RxDashboard style={{ fontSize: "1.5rem" }} />,
    name: "DashBoard",
    icon2: "",
    path: "/",
  },
  {
    icon1: <GrUserManager style={{ fontSize: "1.5rem" }} />,
    name: "Students",
    icon2: "",
    path: "/students",
  },
  {
    icon1: <SiGoogleclassroom style={{ fontSize: "1.5rem" }} />,
    name: "Class",
    icon2: <BiChevronRight style={{ fontSize: "1.5rem" }} />,
    subMenu: [
      {
        id: 1,
        name: "Class",
        path: "/class",
      },
      {
        id: 2,
        name: "Class Routine",
        path: "/class/routine",
      },
      {
        id: 3,
        name: "Virtual ClassRoom",
        path: "/class/virtual",
      },
      {
        id: 4,
        name: "Subject",
        path: "/class/subject",
      },
    ],
  },
  {
    icon1: <PiStudentDuotone style={{ fontSize: "1.5rem" }} />,
    name: "Users",
    icon2: <BiChevronRight style={{ fontSize: "1.5rem" }} />,
    subMenu: [
      {
        id: 1,
        name: "Student",
        path: "/users/students",
      },
      {
        id: 2,
        name: "Teacher",
        path: "/users/teacher",
      },
      {
        id: 3,
        name: "Parents",
        path: "/users/parents",
      },
    ],
  },
  {
    icon1: <SiReacthookform style={{ fontSize: "1.5rem" }} />,
    name: "Student Evaluation",
    path: "/evaluation",
  },
  ,
  {
    icon1: <GiNotebook style={{ fontSize: "1.5rem" }} />,
    name: "HomeWork",
    icon2: "",
    path: "/homework",
  },
  {
    icon1: <BsBookmarkCheck style={{ fontSize: "1.5rem" }} />,
    name: "Attendance",
    icon2: "",
    path: "/attendance",
  },
  {
    icon1: <MdOutlinePayment style={{ fontSize: "1.5rem" }} />,
    name: "Payment",
    icon2: <BiChevronRight style={{ fontSize: "1.5rem" }} />,
    subMenu: [
      {
        id: 1,
        name: "Fee Payment",
        path: "/payment/fee",
      },
    ],
  },
];

export default sideBarVal;
