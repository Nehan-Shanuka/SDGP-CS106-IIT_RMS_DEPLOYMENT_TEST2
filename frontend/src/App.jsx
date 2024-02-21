/* eslint-disable no-unused-vars */
import { useState } from "react"
import SideNavbar from "./pages/global/SideNavbar"
import Topbar from "./pages/global/Topbar";
import { Routes, Route } from "react-router-dom";
import MyTimetable from "./pages/myTimetable";
import PlannedSessions from "./pages/plannedSessions";

export default function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      <div className="flex relative h-screen">
        <SideNavbar isSidebar={isSidebar} />
        <main className="w-full">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path="/my-timetable" element={<MyTimetable />} />
            <Route path="/reservations" element={<MyTimetable />} />
            <Route path="/planned-sessions" element={<PlannedSessions />} />
            <Route path="/student-grouping" element={<MyTimetable />} />
            <Route path="/review-requests" element={<MyTimetable />} />
          </Routes>
        </main>
      </div>
    </>
  )
}