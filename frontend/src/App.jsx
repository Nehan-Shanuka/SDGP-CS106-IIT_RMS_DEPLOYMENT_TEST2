/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import SideNavbar from "./pages/global/SideNavbar"
import Topbar from "./pages/global/Topbar";
import MyTimetable from "./pages/myTimetable";
import WeeklyTimetable from "./pages/weeklyTimetable";
import Reservation from "./pages/reservations";
import PlannedSessions from "./pages/plannedSessions";
import StudentGrouping from "./pages/studentGrouping";
import ReviewReservations from "./pages/reviewReservations";
import Welcome from "./pages/home";
import SigninForme from "./pages/registation";
import Navbar from "./components/Navbar";
// import intro from "./components/FlashScreen";
import ProfilePage from "./pages/UserProfile";
import NestedGrid from "./components/weeklytimetable/NestedGrid";
import ExpandableReviewReservation from "./pages/expandableReviewPage";
import UploadsPage from "./pages/Upload";
import Userprofile from "./pages/UserProfile/index"
import Home from "./pages/home/index"



export default function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      <div className="relative flex h-screen">
        <Navbar isSidebar={isSidebar} />
        <main className="w-full">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
          <Route path="/" element={<Home/>} />

            <Route path="/my-timetable" element={<MyTimetable/>} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/planned-sessions" element={<PlannedSessions />} />
            <Route path="/student-grouping" element={<UploadsPage  />} />
            <Route path="/review-requests" element={<ExpandableReviewReservation/>} />
            <Route path="/weekly-timetble" element={<WeeklyTimetable/>} />
            <Route path="/my-profile" element={<Userprofile/>} />
          </Routes>
        </main>
      </div>
    </>
  )
}