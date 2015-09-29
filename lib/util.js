lastReading = function(){
    return OBDReading.findOne({}, {sort: {timestamp: -1}, limit: 1});
}