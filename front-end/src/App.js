import "./App.css";
import React, { useState } from "react";
import Sidebar from "./scenes/global/SideNavbar";
import Topbar from "./scenes/global/Topbar";
import { Routes, Route } from "react-router-dom";
import PlannedSessions from "./scenes/plannedSessions";
import Reservation from "./scenes/reservation";
import StdGrouping from "./scenes/stdGrouping";
import ReservationReview from "./scenes/reservationReview"
import MyTimetable from "./scenes/myTimetable";

function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path="/my-timetable" element={<MyTimetable />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/planned-sessions" element={<PlannedSessions />} />
            <Route path="/student-grouping" element={<StdGrouping />} />
            <Route path="/review-requests" element={<ReservationReview />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
