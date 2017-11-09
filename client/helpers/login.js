Template.login.onRendered(function () {
  $("#signUp")
  .form({
    fields: {
      name     : 'empty',
      gender   : 'empty',
      username : 'empty',
      password : ['minLength[6]', 'empty'],
      terms    : 'checked'
    }
  });
});

Template.login.events({
  "click #loginButton":function(){

    $('#login').velocity('transition.slideLeftIn');
    $("#login").css("display","inline");
    $("#signUp").css("display","none");

  },
  "click #signUpButton":function(){

    $('#signUp').velocity('transition.slideLeftIn');
    $("#signUp").css("display","inline");
    $("#login").css("display","none");

  },

  "submit #login": function(event) {

            event.preventDefault();
            console.log("Logged in");
            event.preventDefault();
            var username = event.target.username.value;
            var password = event.target.password.value;
            Meteor.loginWithPassword(username, password);
            Router.go('/mainPage');

    },

  "submit #signUp": function(event) {

            event.preventDefault();
            console.log("Form submitted.");
            var password = event.target.password.value;
            var username = event.target.username.value;
            console.log(password);
            console.log(username);
            Accounts.createUser({
            password: password,
            username: username,
            profile:"abc"

        });
        Router.go('/mainPage');
          }

});
