/* eslint-disable no-unused-vars */
import { useState } from "react"
import SideNavbar from "./pages/global/SideNavbar"
import Topbar from "./pages/global/Topbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
      <div className="flex relative h-screen">
        <SideNavbar isSidebar={isSidebar} />
        <main className="w-full">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path="/my-timetable" element={{}} />
            <Route path="/reservations" element={{}} />
            <Route path="/planned-sessions" element={{}} />
            <Route path="/student-grouping" element={{}} />
            <Route path="/review-requests" element={{}} />
          </Routes>
        </main>
      </div>
    </>
  )
}