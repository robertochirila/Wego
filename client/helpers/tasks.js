Template.tasks.events({
  "click #createTaskButton":function(){
    $("#createTaskForm").velocity("transition.flipYIn");
    $("#createTaskForm").css("display","inline");

  },
  "submit #createTaskForm":function(){
    var taskName=event.target.taskName.value.toUpperCase();;
    var duration=event.target.duration.value;
    var category=event.target.category.value.toUpperCase();;
    var date = new Date();
    var month=date.getMonth();
    var day=date.getDate();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    createdAt=day+"/"+month+" "+hours+":"+minutes+":"+seconds;
    console.log(createdAt);
    tasks.insert({
      name:taskName,
      category:category,
      duration:duration,
      createdAt:createdAt,
      skills:{
        creativity:6,
        analytics:3,
        fitness:7,
        research:4,
        communication:4,
        problemSolving:3,
        timeManagement:7,
        leadership:3,
        selfMotivation:3,
        teamwork:4
      },
      started:"false",
      finished:"false"
    });
  }
});

Template.tasks.helpers({
  returnTask:function(){
    return tasks.find();
  }
});

Template.tasks.onRendered(function(){

     $('.ui .card ').velocity('transition.slideLeftIn');
     /*$(".ui .card").hover(function() {
     $( ".ui .card" ).velocity({
       scale: 1.2
     },{
       duration:1000
     });
   });*/


     //$(".ui .card").velocity("fadeIn", { duration: 1500 })

     //$("#createTaskButton").velocity('transition.perspectiveRightIn');
     $("#createTaskButton").velocity({
     scale: 1.2,
     translateY: 500,
     blur: 20
     }, {
     duration: 1000,
     loop: 1
   });
   });
