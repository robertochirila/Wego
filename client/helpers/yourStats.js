userSkillsArray=[];
Template.yourStats.onRendered(function(){

  $("#healthIndicators").velocity("transition.flipYIn");
  $('#dopamineBar').progress();
  $('#confidenceBar').progress();
  $('#moraleBar').progress();
  $("#userImage").velocity("transition.slideLeftIn");
  console.log(userProfileId);

});
Template.yourStats.events({
  "click #helpButton":function(){
    //if($("#dopamineIcon").css("display","inline")){
      //$("#dopamineIcon").velocity("transition.slideDownBigOut");
    //}
    $("#dopamineIcon").velocity("transition.flipYIn");
    $("#dopamineIcon").css("display","inline");
    $("#confidenceIcon").velocity("transition.flipYIn");
    $("#confidenceIcon").css("display","inline");
    $("#moraleIcon").velocity("transition.flipYIn");
    $("#moraleIcon").css("display","inline");
    $("#dopamineParagraph").velocity("transition.slideRightIn");
    $("#dopamineParagraph").css("display","inline");
    $("#confidenceParagraph").velocity("transition.slideRightIn");
    $("#confidenceParagraph").css("display","inline");
    $("#moraleParagraph").velocity("transition.slideRightIn");
    $("#moraleParagraph").css("display","inline");
    $("#dopamineHeader").velocity("transition.slideLeftIn");
    $("#dopamineHeader").css("display","inline");
    $("#confidenceHeader").velocity("transition.slideLeftIn");
    $("#confidenceHeader").css("display","inline");
    $("#moraleHeader").velocity("transition.slideLeftIn");
    $("#moraleHeader").css("display","inline");
  },
  "click #arrow":function(){
    $("#achievementsSkillsGrid").css("display","inline");
    $('html,body').animate({
        scrollTop: $("#achievementsSkillsGrid").offset().top},
        'slow');
        $("#skillsHeader").velocity("transition.slideLeftIn");
        $("#achievementsHeader").velocity("transition.slideRightIn");
        $("#skillsDiv").velocity("transition.slideDownIn");
        userSkillsArray=[];
        var creativity = userProfiles.findOne(userProfileId).skills.creativity;
        var analytics = userProfiles.findOne(userProfileId).skills.analytics;
        var fitness = userProfiles.findOne(userProfileId).skills.fitness;
        var research = userProfiles.findOne(userProfileId).skills.research;
        var communication = userProfiles.findOne(userProfileId).skills.communication;
        var problemSolving = userProfiles.findOne(userProfileId).skills.problemSolving;
        var timeManagement = userProfiles.findOne(userProfileId).skills.timeManagement;
        var leadership = userProfiles.findOne(userProfileId).skills.leadership;
        var selfMotivation = userProfiles.findOne(userProfileId).skills.selfMotivation;
        var teamwork = userProfiles.findOne(userProfileId).skills.teamwork;
        userSkillsArray.push(creativity,analytics,fitness,research,communication,problemSolving,timeManagement,leadership,selfMotivation,teamwork);
        console.log(userSkillsArray);
        $('#creativityBar').attr("data-percent",userSkillsArray[0]);
        $('#creativityBar').progress();

        $('#analyticsBar').attr("data-percent",userSkillsArray[1]);
        $('#analyticsBar').progress();

        $('#fitnessBar').attr("data-percent",userSkillsArray[2]);
        $('#fitnessBar').progress();

        $('#researchBar').attr("data-percent",userSkillsArray[3]);
        $('#researchBar').progress();

        $('#communicationBar').attr("data-percent",userSkillsArray[4]);
        $('#communicationBar').progress();

        $('#problemSolvingBar').attr("data-percent",userSkillsArray[5]);
        $('#problemSolvingBar').progress();

        $('#timeManagementBar').attr("data-percent",userSkillsArray[6]);
        $('#timeManagementBar').progress();

        $('#leadershipBar').attr("data-percent",userSkillsArray[7]);
        $('#leadershipBar').progress();

        $('#selfMotivationBar').attr("data-percent",userSkillsArray[8]);
        $('#selfMotivationBar').progress();

        $('#teamworkBar').attr("data-percent",userSkillsArray[9]);
        $('#teamworkBar').progress();
  }
});
