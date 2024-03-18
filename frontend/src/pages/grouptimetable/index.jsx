import React from 'react';
import BasicSelect from '../../components/BasicSelect.jsx';
import WeeklyallTimetable from '../../components/WeeklyallTimetable.jsx';

function Grouptimetable() {
  const values = ['10', '20', '30', '40'];
  const labels = ['Ten', 'Twenty', 'Thirty', 'Forty'];

  return (
    <div>
      <BasicSelect values={values} labels={labels} />
      <WeeklyallTimetable/>
    </div>
  );
}

export default Grouptimetable;