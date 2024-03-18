import React, { useState } from 'react';
import BasicSelect from '../../components/BasicSelect.jsx';
import WeeklyallTimetable from '../../components/WeeklyallTimetable.jsx';

function Grouptimetable() {


  
  const values = ["CS-A", "CS-B", "CS-C", "CS-D", "CS-E", "CS-F", "CS-G", "CS-H", "CS-I", "CS-J", "CS-K", "CS-L", "CS-M", "CS-N", "CS-O"];
  const labels = ["CS-A", "CS-B", "CS-C", "CS-D", "CS-E", "CS-F", "CS-G", "CS-H", "CS-I", "CS-J", "CS-K", "CS-L", "CS-M", "CS-N", "CS-O"];

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
