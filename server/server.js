Meteor.startup(function () {

    /*
     ServiceConfiguration.configurations.upsert({
     service: FACEBOOK
     }, {
     $set: {
     appId: "xxx",
     secret: "xxx"
     }
     });

     Accounts.loginServiceConfiguration.upsert({
     service: TWITTER
     }, {
     $set: {
     consumerKey: "xxx",
     secret: "xxx"
     }
     }); */

    Accounts.loginServiceConfiguration.remove({
        service: "google"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "google",
        clientId: "88407937080-0rdbhvhpr3jn9qucj11ritp6e27ji533.apps.googleusercontent.com",
        secret: "EecqjhXViJKf4twMYNlrBG7S"
    });
});