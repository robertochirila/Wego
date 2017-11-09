Template.detailTask.helpers({

  returnDetailTask:function(){

    return tasks.find({_id:myArray[0]});

  }

});

Template.detailTask.onRendered(function(){

  $("#skillsParagraph").velocity("transition.slideRightIn");
  $(".ui .card").velocity({
  scale: 1.2,
  translateX: -100,
  blur: 1.2
  }, {
  duration: 1000,
  loop: 1
});

  $('#creativityBar').attr("data-percent",skillsArray[0]*10);
  $('#creativityBar').progress();

  $('#analyticsBar').attr("data-percent",skillsArray[1]*10);
  $('#analyticsBar').progress();

  $('#fitnessBar').attr("data-percent",skillsArray[2]*10);
  $('#fitnessBar').progress();

  $('#researchBar').attr("data-percent",skillsArray[3]*10);
  $('#researchBar').progress();

  $('#communicationBar').attr("data-percent",skillsArray[4]*10);
  $('#communicationBar').progress();

  $('#problemSolvingBar').attr("data-percent",skillsArray[5]*10);
  $('#problemSolvingBar').progress();

  $('#timeManagementBar').attr("data-percent",skillsArray[6]*10);
  $('#timeManagementBar').progress();

  $('#leadershipBar').attr("data-percent",skillsArray[7]*10);
  $('#leadershipBar').progress();

  $('#selfMotivationBar').attr("data-percent",skillsArray[8]*10);
  $('#selfMotivationBar').progress();

  $('#teamworkBar').attr("data-percent",skillsArray[9]*10);
  $('#teamworkBar').progress();

  console.log(myArray);

});
