const db = require('../config/connection');
const { Job, User } = require('../models');

const userData = require('./userData.json');

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Job.deleteMany({});
  
  // bulk create each model
  const users = await User.insertMany(userData);
  const jobs = await Job.insertMany(jobData);

  for (newClass of classes) {
    // randomly add each class to a school
    const tempSchool = schools[Math.floor(Math.random() * schools.length)];
    tempSchool.classes.push(newClass._id);
    await tempSchool.save();

    // randomly add a professor to each class
    const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
    newClass.professor = tempProfessor._id;
    await newClass.save();

    // reference class on professor model, too
    tempProfessor.classes.push(newClass._id);
    await tempProfessor.save();
  }

  console.log('all done!');
  process.exit(0);
});