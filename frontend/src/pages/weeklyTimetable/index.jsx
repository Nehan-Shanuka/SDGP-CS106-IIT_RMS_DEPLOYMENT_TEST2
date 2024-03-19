/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import NestedGrid from "../../components/weeklytimetable/NestedGrid";

export default function WeeklyTimetable({ user }) {
  return (
    <div>
      <NestedGrid user={user} />
    </div>
  );
}
