Template.home.helpers({
    readings: function () {
        return OBDReading.find({}, {sort: {timestamp: -1}, limit: 10});
    }
});

