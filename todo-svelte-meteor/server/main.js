import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollection";

// insert task into mongo collection function
const insertTask = (taskText) => TasksCollection.insert({ text: taskText });

// Initialize mongo data
Meteor.startup(() => {
  console.log("start");
  if (TasksCollection.find().count() === 0) {
    [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
    ].forEach(insertTask);
  }
});
