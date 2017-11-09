myArray=[];
skillsArray=[];

Template.displayTask.onRendered(function(){
  //$(".ui .card").velocity("transition.slideLeftIn");
  $('.ui .dimmer')
  .dimmer({
    on: 'hover'
  });
});

Template.displayTask.events({

"click #viewDetailButton":function(){
  console.log(this._id);
  myArray=[];
  skillsArray=[];
  console.log(tasks.find({'skills.creativity': this._id}));
  var creativity = tasks.findOne(this._id).skills.creativity;
  var analytics = tasks.findOne(this._id).skills.analytics;
  var fitness = tasks.findOne(this._id).skills.fitness;
  var research = tasks.findOne(this._id).skills.research;
  var communication = tasks.findOne(this._id).skills.communication;
  var problemSolving = tasks.findOne(this._id).skills.problemSolving;
  var timeManagement = tasks.findOne(this._id).skills.timeManagement;
  var leadership = tasks.findOne(this._id).skills.leadership;
  var selfMotivation = tasks.findOne(this._id).skills.selfMotivation;
  var teamwork = tasks.findOne(this._id).skills.teamwork;
  myArray.push(this._id);
  skillsArray.push(creativity,analytics,fitness,research,communication,problemSolving,timeManagement,leadership,selfMotivation,teamwork);
  console.log(skillsArray);

},

"click #startTaskButton":function(){
  tasks.update(this._id,{
    $set:{started:true}
  });
  console.log(tasks.find().fetch());
}

});
