userProfileId="";

Template.yourProfile.onRendered(function () {
  /*userProfiles.insert({
    created:false;
  });*/
  /*var nr=userProfiles.find().count();
  if(nr>0){
    $("#profileForm1").css("display","none");
  }*/
  $("#profileForm").velocity("transition.flipYIn");
  $("#profileForm1").velocity("transition.flipYIn");
  $("#profileForm1")
  .form({
    fields: {
      firstName     : 'empty',
      lastName   : 'empty',
      age : 'empty',
      email : ['minLength[6]', 'empty'],
      country   : 'empty',
      education : 'empty',
      quote : 'empty',
      aboutYou : ['minLength[9]']
    }
  });
  $("#profileForm")
  .form({
    fields: {
      firstName     : 'empty',
      lastName   : 'empty',
      age : 'empty',
      email : ['minLength[6]', 'empty'],
      country   : 'empty',
      education : 'empty',
      quote : 'empty',
      aboutYou : ['minLength[9]']
    }
  });
});

Template.yourProfile.events({

  "submit #profileForm1":function(event){

   event.preventDefault();
   var firstName=event.target.firstName.value;
   var lastName=event.target.lastName.value;
   var age=event.target.age.value;
   var email=event.target.email.value;
   var country=event.target.country.value;
   var education=event.target.education.value;
   var quote=event.target.quote.value;
   var aboutYou=event.target.aboutYou.value;
   var something=userProfiles.insert({

     firstName:firstName,
     lastName:lastName,
     email:email,
     age:age,
     country:country,
     education:education,
     quote:quote,
     aboutYou:aboutYou,
     skills:{
       creativity:45,
       analytics:67,
       fitness:80,
       research:15,
       communication:20,
       problemSolving:35,
       timeManagement:37,
       leadership:50,
       selfMotivation:30,
       teamwork:34
     }
   });
   //console.log(something);
   //console.log(Meteor.user());
   userProfileId=something;
   //Meteor.users.update(this.userId, {$set: {userProfileId: userProfileId}});
   Router.go('/yourStats');
 },

 " click #editProfileButton ":function(){

   $("#firstName").removeAttr('disabled');
   $("#lastName").removAttr('disabled');
   $("#age").removeAttr('disabled');
   $("#email").removeAttr('disabled');
   $("#country").removeAttr('disabled');
   $("#education").removeAttr('disabled');
   $("#quote").removeAttr('disabled');
   $("#aboutYou").removeAttr('disabled');

 }

});

Template.yourProfile.helpers({
  returnUserProfileInfo:function () {

      $("#profileForm1").css("display","none");
      $("#firstName").attr('disabled','disabled');
      $("#lastName").attr('disabled','disabled');
      $("#age").attr('disabled','disabled');
      $("#email").attr('disabled','disabled');
      $("#country").attr('disabled','disabled');
      $("#education").attr('disabled','disabled');
      $("#quote").attr('disabled','disabled');
      $("#aboutYou").attr('disabled','disabled');

    return userProfiles.find();
  },
  checkUser:function(){
    var n=userProfiles.find().count();
    if(n==0)
    return true;
  }

});
