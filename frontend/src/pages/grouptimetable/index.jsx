import React, { useState } from 'react';
import BasicSelect from '../../components/BasicSelect.jsx';
import WeeklyallTimetable from '../../components/WeeklyallTimetable.jsx';

function Grouptimetable() {
  const values = ["CS-A", "CS-J", "CS-G", "CS-B"];
  const labels = ["CS-A", "CS-J", "CS-G", "CS-B"];

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <BasicSelect values={values} labels={labels} onSelect={handleSelectChange} />
      <WeeklyallTimetable selectedValue={selectedValue} />
    </div>
  );
}

export default Grouptimetable;
