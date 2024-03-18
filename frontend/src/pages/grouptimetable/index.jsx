import React from 'react';
import BasicSelect from '../../components/BasicSelect.jsx';
import WeeklyallTimetable from '../../components/WeeklyallTimetable.jsx';

function Grouptimetable() {
  const values = ["CS-A","CS-J","CS-G","CS-B"];
  const labels = ["CS-A","CS-J","CS-G","CS-B"];
  const selectedValue = "CS-J";

  return (
    <div>
      <BasicSelect values={values} labels={labels} />
      <WeeklyallTimetable selectedValue={selectedValue}/>
    </div>
  );
}

export default Grouptimetable;