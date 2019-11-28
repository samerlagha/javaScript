const getMessagesForBestStudents =(allStudents,failedStudents) =>{
    const passedStudents = allStudents
       .filter(name => !failedStudents.includes(name));
  //    .filter(name=> failedStudents.indexOf(name) === -1);
   const messages = passedStudents
     .map(name => 'Good job, ' + name);
  
     return messages;
  };
  
  const allStudents=['Ann','Sam','Bob','Kate'] ;
  
  const failedStudents =['Sam', 'Bob'];
  console.log(getMessagesForBestStudents(allStudents,failedStudents));