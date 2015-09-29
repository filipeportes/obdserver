FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("layout", {content: "home"});
    }
});