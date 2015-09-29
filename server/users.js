Accounts.onCreateUser(function (options, user) {

    var userProperties = {
        profile: options.profile || {},
        isAdmin: false
    };
    user = _.extend(user, userProperties);

    // set email on profile
    if (options.email)
        user.profile.email = options.email;

    // set username on profile
    if (!user.profile.name)
        user.profile.name = user.username;

    // is the first user ever, make them an admin
    user.isAdmin = Meteor.users.find({}).count() === 0;

    return user;
});