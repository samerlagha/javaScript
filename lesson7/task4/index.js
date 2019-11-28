const getMessagesForBestStudents =(allStudents,failedStudents) =>
      allStudents
     .filter(name => !failedStudents.includes(name))
     .map(name => 'Good job, ' + name);
  
  //   .filter(name=> failedStudents.indexOf(name) === -1);

  const allStudents=['Ann','Sam','Bob','Kate'] ;
  
  const failedStudents =['Sam', 'Bob'];
  console.log(getMessagesForBestStudents(allStudents,failedStudents));