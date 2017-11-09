import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  console.log(" Server is up ");
  //console.log(tasks.find().fetch());
  //console.log(userProfiles.find().fetch());

  Accounts.onCreateUser((options, user) => {
    //console.log(options);
    console.log(user);
  // add your extra fields here; don't forget to validate the options, if needed
  /*_.extend(user, {
    status: false,
    createdAt: new Date()
  });*/
  //console.log(user);

  return user;
});

/*Meteor.publish("myuser",
  function () {
    return Meteor.users.find(this.userId,
      {fields: {profile:"abc"}});
  }
);*/


  // code to run on server at startup
});
