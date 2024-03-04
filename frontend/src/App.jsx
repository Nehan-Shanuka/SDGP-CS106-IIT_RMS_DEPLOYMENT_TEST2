/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import SideNavbar from "./pages/global/SideNavbar"
import Topbar from "./pages/global/Topbar";
import MyTimetable from "./pages/myTimetable";
import Reservation from "./pages/reservations";
import PlannedSessions from "./pages/plannedSessions";
import StudentGrouping from "./pages/studentGrouping";
import ReviewReservations from "./pages/reviewReservations";
import Welcome from "./pages/home";
import SigninForme from "./pages/registation";
import Navbar from "./components/Navbar";
// import intro from "./components/FlashScreen";
import ProfilePage from "./pages/UserProfile";

export default function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      <div className="relative flex h-screen">
        <SideNavbar isSidebar={isSidebar} />
        <main className="w-full">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path="/my-timetable" element={<MyTimetable />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/planned-sessions" element={<PlannedSessions />} />
            <Route path="/student-grouping" element={<StudentGrouping />} />
            <Route path="/review-requests" element={<ReviewReservations />} />
          </Routes>
        </main>
      </div>
    </>
  )
}