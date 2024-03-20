const stdOpHave = [
  { id: 20220613, op1: "ML", op2: "AL" },
  { id: 20220614, op1: "ML", op2: "AL" },
  { id: 20220615, op1: "ML", op2: "AL" },
  { id: 20220616, op1: "ML", op2: "AL" },
  { id: 20220617, op1: "ML", op2: "AL" },
  { id: 20220618, op1: "ML", op2: "AL" },
  { id: 20220619, op1: "ML", op2: "AL" },
  { id: 20220620, op1: "ML", op2: "AL" },
  { id: 20220621, op1: "ML", op2: "AL" },
  { id: 20220622, op1: "ML", op2: "AL" },
  { id: 20220623, op1: "ML", op2: "AL" },
  { id: 20220624, op1: "ML", op2: "AL" },
  { id: 20220625, op1: "ML", op2: "AL" },
  { id: 20220626, op1: "ML", op2: null },
];

function StudentGrouping(students) {
  const moduleNames = ["AL", "ML", "MAD", "SWD", "MPG", "XRMI"];

  const stdOnlyOneOp = students.filter(
    (student) => !student.op1 || !student.op2
  );

  //   console.log(stdOnlyOneOp);

  const onlyOpGroup = moduleNames.map((module) => {
    const moduleOnly = stdOnlyOneOp.filter(
      (std) => std.op1 === module || std.op2 === module
    );
    return { name: module, count: moduleOnly.length, students: moduleOnly };
  });

  //   console.log(onlyOpGroup);

  const stdWithBothOptions = students.filter(
    (student) => student.op1 && student.op2
  );

  //   const opAsML = chosenModule(stdWithBothOptions, "ML");
  //   const opAsAL = chosenModule(stdWithBothOptions, "AL");
  //   const opAsMAD = chosenModule(stdWithBothOptions, "MAD");
  //   const opAsSWD = chosenModule(stdWithBothOptions, "SWD");
  //   const opAsMPG = chosenModule(stdWithBothOptions, "MPG");
  //   const opAsXRMI = chosenModule(stdWithBothOptions, "XRMI");

  //   const opMLandAL = filterCombinations(opAsML, "AL");
  //   const opMLandMAD = filterCombinations(opAsML, "MAD");
  //   const opMLandSWD = filterCombinations(opAsML, "SWD");
  //   const opMLandMPG = filterCombinations(opAsML, "MPG");
  //   const opMLandXRMI = filterCombinations(opAsML, "XRMI");
  //   const opALandMAD = filterCombinations(opAsAL, "MAD");
  //   const opALandSWD = filterCombinations(opAsAL, "SWD");
  //   const opALandMPG = filterCombinations(opAsAL, "MPG");
  //   const opALandXRMI = filterCombinations(opAsAL, "XRMI");
  //   const opMADandSWD = filterCombinations(opAsMAD, "SWD");
  //   const opMADandMPG = filterCombinations(opAsMAD, "MPG");
  //   const opMADandXRMI = filterCombinations(opAsMAD, "XRMI");
  //   const opSWDandMPG = filterCombinations(opAsSWD, "MPG");
  //   const opSWDandXRMI = filterCombinations(opAsSWD, "XRMI");
  //   const opMPGandXRMI = filterCombinations(opAsMPG, "XRMI");

  const combinedArray = [];
  const combinedArrayNames = [];

  // Combinations of modules chosen by students
  const stdOpHaveCombinations = stdWithBothOptions.reduce((acc, std) => {
    if (std.op1 && std.op2) {
      const combination = [std.op1, std.op2].sort().join(" - ");

      if (combinedArrayNames.includes(combination)) {
        combinedArray.forEach((com) => {
          if (com.name === combination) {
            com.count++;
            com.students.push(std);
          }
        });
      } else {
        combinedArray.push({ name: combination, count: 1, students: [std] });
        combinedArrayNames.push(combination);
      }

      acc[combination] = acc[combination] ? acc[combination] + 1 : 1;
    }
    return acc;
  }, {});

  combinedArray.sort((a, b) => b.count - a.count);

  //   console.log(combinedArray);

  const groupMaxCount = 10;
  const groupMinCount = 5;

  const maxCombinations = combinedArray.filter(
    (com) => com.count > groupMaxCount
  );

  const minMaxGroupCombinations = combinedArray.filter(
    (com) => com.count >= groupMinCount && com.count <= groupMaxCount
  );

  const minCombinations = combinedArray.filter(
    (com) => com.count < groupMinCount
  );

  //   console.log(maxCombinations);
  //   console.log(minMaxGroupCombinations);
  //   console.log(minCombinations);

  const mainGroups = [];
  let stdWithNoGroup = [];

  addMinMaxCombinationsToMainGroups(minMaxGroupCombinations, mainGroups);
  addMaxCombinationsToMainGroups(
    maxCombinations,
    mainGroups,
    groupMinCount,
    groupMaxCount,
    stdWithNoGroup
  );

  addOneOptionToMainGroups(
    onlyOpGroup,
    mainGroups,
    groupMinCount,
    groupMaxCount,
    stdWithNoGroup
  );

  addMinCombinationsToMainGroups(minCombinations, mainGroups, stdWithNoGroup);
  NoGroupStudents(stdWithNoGroup, mainGroups, groupMaxCount);

  console.log("MAIN GROUP: ", mainGroups);

  stdWithNoGroup = stdWithNoGroup.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  console.log("NO GROUP: ", stdWithNoGroup);

  stdWithNoGroup = addNoGroupStdsToFinalGroups(
    stdWithNoGroup,
    mainGroups,
    groupMaxCount
  );

  console.log("MAIN GROUP: ", mainGroups);
  console.log("NO GROUP: ", stdWithNoGroup);

  return mainGroups;
}

// organizedAlgo(stdOpHave);

function chosenModule(students, option) {
  return students.filter(
    (student) => student.op1 === option || student.op2 === option
  );
}

function filterCombinations(students, option) {
  return students.filter(
    (student) => student.op1 === option && student.op2 === option
  );
}

function getUniqueElements(array) {
  // Create an empty Set to store unique elements
  const uniqueElements = new Set();
  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // Add each element to the Set
    uniqueElements.add(array[i]);
  }
  // Convert the Set back to an array and return it
  return Array.from(uniqueElements);
}

function addMinMaxCombinationsToMainGroups(minMaxCombinations, mainGroups) {
  minMaxCombinations.forEach((group) => {
    const tempGroup = [];
    const modules = [];
    // console.log("Group: ", group);

    group.students.forEach((student) => {
      tempGroup.push(student);
      if (student.op1 !== null) {
        modules.push(student.op1);
      }
      if (student.op2 !== null) {
        modules.push(student.op2);
      }
    });
    const uniqueModules = getUniqueElements(modules);
    const groupFormed = { students: tempGroup, modules: uniqueModules };
    mainGroups.push(groupFormed);
    // console.log("MAIN GROUP: ", mainGroups);
  });
}

function addMaxCombinationsToMainGroups(
  maxCombinations,
  mainGroups,
  groupMinCount,
  groupMaxCount,
  noGroupStds
) {
  maxCombinations.forEach((group) => {
    // console.log("Group: ", group);
    let groupCount = group.count;
    let studentCount = 0;

    while (groupCount >= groupMinCount) {
      const tempGroup = [];
      const modules = [];
      for (let i = 0; i < groupMaxCount; i++) {
        tempGroup.push(group.students[i + studentCount]);
        if (group.students[i + studentCount].op1 !== null) {
          modules.push(group.students[i + studentCount].op1);
        }
        if (group.students[i + studentCount].op2 !== null) {
          modules.push(group.students[i + studentCount].op2);
        }
        groupCount--;
        // console.log("Student count: ", group.students[i].id);
        if (groupCount === 0) {
          break;
        }
      }
      studentCount += 10;
      // console.log("Student count: ", studentCount, " - ", groupCount);
      if (groupCount !== 0 && group.count - studentCount <= groupMinCount) {
        for (let j = studentCount; j < group.count; j++) {
          // console.log(j);
          noGroupStds.push(group.students[j]);
        }
      }
      const uniqueModules = getUniqueElements(modules);
      mainGroups.push({ students: tempGroup, modules: uniqueModules });
      // console.log("MAIN GROUP: ", mainGroups);
    }
  });
}

function addOneOptionToMainGroups(
  onlyOpGroup,
  mainGroups,
  groupMinCount,
  groupMaxCount,
  noGroupStds
) {
  onlyOpGroup.forEach((group) => {
    // console.log("Group: ", group);
    let groupCount = group.count;
    let studentCount = 0;
    let checked = false;

    if (groupCount === 0) {
      return;
    }

    while (groupCount >= groupMinCount) {
      checked = true;
      const tempGroup = [];
      const modules = [];
      for (let i = 0; i < groupMaxCount; i++) {
        tempGroup.push(group.students[i + studentCount]);
        if (group.students[i + studentCount].op1 !== null) {
          modules.push(group.students[i + studentCount].op1);
        } else if (group.students[i + studentCount].op2 !== null) {
          modules.push(group.students[i + studentCount].op2);
        }
        groupCount--;
        // console.log("Student count: ", group.students[i].id);
        if (groupCount === 0) {
          break;
        }
      }
      studentCount += 10;
      //   console.log("Student count: ", studentCount, " - ", groupCount);
      if (groupCount !== 0 && group.count - studentCount <= groupMinCount) {
        for (let j = studentCount; j < group.count; j++) {
          //   console.log(j);
          noGroupStds.push(group.students[j]);
        }
      }
      const uniqueModules = getUniqueElements(modules);
      mainGroups.push({ students: tempGroup, modules: uniqueModules });
      // console.log("MAIN GROUP: ", mainGroups);
    }
    if (!checked) {
      group.students.forEach((student) => {
        noGroupStds.push(student);
      });
    }
  });
}

function addMinCombinationsToMainGroups(
  minCombinations,
  mainGroups,
  noGroupStds
) {
  minCombinations.forEach((group) => {
    // console.log("Group: ", group);
    // Iterate through the students in the minGroup
    group.students.forEach((student) => {
      const checked = false;
      // Check if the student has only one option
      if (
        (student.op1 === null || student.op2 === null) &&
        (student.op1 !== null || student.op2 !== null)
      ) {
        // console.log("Student with one option");
        // console.log(student);
        // Iterate through the mainGroups
        mainGroups.forEach((mainGroup) => {
          checked = true;
          // Check if the mainGroup's modules array has only one element
          if (mainGroup.modules.length === 1) {
            // Check if the student's option is in the mainGroup's modules array
            mainGroup.modules.includes(student.op1)
              ? mainGroup.students.push(student)
              : // Check if the student's option is in the mainGroup's modules array
              mainGroup.modules.includes(student.op2)
              ? mainGroup.students.push(student)
              : noGroupStds.push(student);
          } else if (mainGroup.modules.length === 2) {
            // Check if the student's options are in the mainGroup's modules array
            mainGroup.modules.includes(student.op1) &&
            mainGroup.modules.includes(student.op2)
              ? mainGroup.students.push(student)
              : noGroupStds.push(student);
          } else {
            // Add the student to the noGroupStds array
            noGroupStds.push(student);
          }
        });
      } else {
        // console.log("Student with two options");
        // console.log(student);
        const checkedStds = [];
        let count = mainGroups.length;
        mainGroups.forEach((mainGroup) => {
          checked = true;
          if (checkedStds.includes(student.id)) {
            return;
          }
          // console.log(
          //   "Student: ",
          //   student,
          //   mainGroup.modules.includes(student.op1) ||
          //     mainGroup.modules.includes(student.op2)
          // );
          // console.log(
          //   "Modules: ",
          //   mainGroup.modules,
          //   " | Student OP1: ",
          //   student.op1,
          //   " | Student OP2: ",
          //   student.op2
          // );
          // console.log("Main Group: ", mainGroup);
          // console.log("group: ", mainGroup)
          // console.log("Checked student: ", checkedStds)

          // console.log("Modules: ", mainGroup.modules, " | Student OP1: ", student.op1, " | Student OP2: ", student.op2);
          // console.log(modules.includes(student.op1) || modules.includes(student.op2));
          if (
            mainGroup.modules.includes(student.op1) ||
            mainGroup.modules.includes(student.op2)
          ) {
            // console.log("Student True: ", student);
            // console.log("Not selected: ", student);
            // console.log("One option is in the mainGroup");
            // console.log(student);
            if (mainGroup.students.length < groupMaxCount) {
              mainGroup.students.push(student);
              checkedStds.push(student.id);
              mainGroup.modules.includes(student.op1)
                ? null
                : mainGroup.modules.push(student.op1);
              mainGroup.modules.includes(student.op2)
                ? null
                : mainGroup.modules.push(student.op2);
            } else {
              // console.log("Group is full", student);
              noGroupStds.push(student);
              checkedStds.push(student.id);
              // console.log("Group: ", mainGroup);
            }
          } else {
            // console.log("No Options: ", student);
            noGroupStds.push(student);
            checkedStds.push(student.id);
            // console.log("No option is in the mainGroup");
            // console.log(student);
            // noGroupStds.push(student);
          }
          count--;
          if (count === 0) {
            if (!checkedStds.includes(student.id)) {
              noGroupStds.push(student);
            }
          }
        });
        if (!checked) {
          noGroupStds.push(student);
        }
      }
    });
  });
}

function NoGroupStudents(stdWithNoGroup, mainGroups, groupMaxCount) {
  stdWithNoGroup.forEach((student) => {
    // Check if the student has only one option
    if (
      (student.op1 === null || student.op2 === null) &&
      (student.op1 !== null || student.op2 !== null)
    ) {
      // console.log("Student with one option");
      // console.log(student);
      // Iterate through the mainGroups
      const stdAdded = [];
      let groupCount = mainGroups.length;
      mainGroups.forEach((mainGroup) => {
        // console.log("Student: ", student);
        // Check if the mainGroup's modules array has only one element
        if (mainGroup.students.length >= groupMaxCount) {
          return;
        }
        if (mainGroup.modules.length === 1) {
          //   console.log("Stauts:", student);
          // Check if the student's option is in the mainGroup's modules array
          mainGroup.modules.includes(student.op1)
            ? mainGroup.students.push(student)
            : // Check if the student's option is in the mainGroup's modules array
            mainGroup.modules.includes(student.op2)
            ? mainGroup.students.push(student)
            : null;
          mainGroup.students.includes(student)
            ? stdAdded.push(student.id)
            : null;
        } else if (mainGroup.modules.length === 2) {
          //   console.log("Stauts:", student);
          // Check if the student's options are in the mainGroup's modules array
          mainGroup.modules.includes(student.op1) ||
          mainGroup.modules.includes(student.op2)
            ? mainGroup.students.push(student)
            : null;
          mainGroup.students.includes(student)
            ? stdAdded.push(student.id)
            : null;
        }
        groupCount--;
        if (!stdAdded.includes(student.id) && groupCount === 0) {
          // Add the student to the stdWithNoGroup array
          stdWithNoGroup.push(student);
        }
      });
    } else {
      // console.log("Student with two options");
      // console.log(student);
      const checkedStds = [];
      const mainGroupAdded = [];
      let count = mainGroups.length;
      mainGroups.forEach((mainGroup) => {
        if (
          checkedStds.includes(student.id) ||
          mainGroupAdded.includes(student.id)
        ) {
          return;
        }
        // console.log(
        //   "Student: ",
        //   student,
        //   mainGroup.modules.includes(student.op1) ||
        //     mainGroup.modules.includes(student.op2)
        // );
        // console.log(
        //   "Modules: ",
        //   mainGroup.modules,
        //   " | Student OP1: ",
        //   student.op1,
        //   " | Student OP2: ",
        //   student.op2
        // );
        // console.log("Main Group: ", mainGroup);
        // console.log("group: ", mainGroup)
        // console.log("Checked student: ", checkedStds)

        // console.log("Modules: ", mainGroup.modules, " | Student OP1: ", student.op1, " | Student OP2: ", student.op2);
        // console.log(modules.includes(student.op1) || modules.includes(student.op2));
        if (
          mainGroup.modules.includes(student.op1) ||
          mainGroup.modules.includes(student.op2)
        ) {
          //   console.log("Student True: ", student);
          // console.log("Not selected: ", student);
          // console.log("One option is in the mainGroup");
          // console.log(student);
          if (mainGroup.students.length < groupMaxCount) {
            // console.log("Student added: ", student);
            mainGroup.students.push(student);
            mainGroupAdded.push(student.id);
            checkedStds.push(student.id);
            mainGroup.modules.includes(student.op1)
              ? null
              : mainGroup.modules.push(student.op1);
            mainGroup.modules.includes(student.op2)
              ? null
              : mainGroup.modules.push(student.op2);
          } else {
            // console.log("Group is full", student);
            // console.log(stdWithNoGroup);
            stdWithNoGroup.includes(student)
              ? null
              : stdWithNoGroup.push(student);
            // checkedStds.push(student.id);
            // console.log("Group: ", mainGroup);
          }
        } else {
          // console.log("No Options: ", student);
          stdWithNoGroup.includes(student)
            ? null
            : stdWithNoGroup.push(student);
          checkedStds.push(student.id);
          // console.log("No option is in the mainGroup");
          // console.log(student);
          // stdWithNoGroup.push(student);
          //   console.log(checkedStds)
        }
        count--;
        // console.log(checkedStds);
        if (count === 0) {
          if (!checkedStds.includes(student.id)) {
            stdWithNoGroup.push(student);
          }
        }
        // console.log(stdWithNoGroup);
        // Remove the student from the stdWithNoGroup array that is added to the mainGroup
        stdWithNoGroup = stdWithNoGroup.filter((std) => std.id !== student.id);
      });
    }
  });
}

function addNoGroupStdsToFinalGroups(
  stdWithNoGroup,
  mainGroups,
  groupMaxCount
) {
  let groupCount = stdWithNoGroup.length;
  let stdCount = 0;
  let tempGroup = [];
  let modules = [];

  //   console.log("Group Count: ", groupCount);
  //   console.log("Std Count: ", stdWithNoGroup);

  while (groupCount > 0) {
    for (let i = 0; i < groupMaxCount; i++) {
      // console.log(stdOnlyOneOp[i + stdCount]);
      stdWithNoGroup[i + stdCount].op1 !== null
        ? modules.push(stdWithNoGroup[i + stdCount].op1)
        : null;
      stdWithNoGroup[i + stdCount].op2 !== null
        ? modules.push(stdWithNoGroup[i + stdCount].op2)
        : null;
      tempGroup.push(stdWithNoGroup[i + stdCount]);
      groupCount--;
      if (groupCount === 0) {
        stdWithNoGroup = [];
        break;
      }
    }
    stdCount += 10;
    const uniqueModules = getUniqueElements(modules);
    mainGroups.push({ students: tempGroup, modules: uniqueModules });
    tempGroup = [];
    modules = [];
  }
  //   console.log(stdWithNoGroup);
  return stdWithNoGroup;
}

export { StudentGrouping };