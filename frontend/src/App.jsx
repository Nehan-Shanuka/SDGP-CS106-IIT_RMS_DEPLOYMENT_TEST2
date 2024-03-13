/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import MyTimetable from "./pages/myTimetable";
import WeeklyTimetable from "./pages/weeklyTimetable";
import Reservation from "./pages/reservations";
import PlannedSessions from "./pages/plannedSessions";
import Navbar from "./components/Navbar";
import ExpandableReviewReservation from "./pages/expandableReviewPage";
import UploadsPage from "./pages/Upload";
import Userprofile from "./pages/UserProfile/index";
import Home from "./pages/home/index";

export default function App() {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);

  const handleStateChange = (state) => {
    setIsWelcome(state);
  };

  const handleOpen = (open) => {
    setIsSidebar(open);
  };

  return (
    <>
      {isWelcome && <Home onStateChange={handleStateChange} />}
      {!isWelcome && (
        <div
          className={`${isWelcome && "overflow-hidden"}relative flex h-screen`}
        >
          <Navbar onSidebarOpen={handleOpen} />
          <main className="w-full">
            <Topbar />
            <Routes>
              <Route path="/my-timetable" element={<MyTimetable />} />
              <Route
                path="/reservations"
                element={<Reservation isSidebarOpen={isSidebar} />}
              />
              <Route path="/planned-sessions" element={<PlannedSessions />} />
              <Route path="/student-grouping" />
              <Route
                path="/review-requests"
                element={<ExpandableReviewReservation />}
              />
              <Route path="/weekly-timetble" element={<WeeklyTimetable />} />
              <Route path="/my-profile" element={<Userprofile />} />
              <Route path="/data-upload" element={<UploadsPage />} />
            </Routes>
          </main>
        </div>
      )}
    </>
  );
}
