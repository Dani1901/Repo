/*
PubNub.init({
    subscribe_key: 'sub-c-f762fb78-2724-11e4-a4df-02ee2ddab7fe',
    publish_key: 'pub-c-156a6d5f-22bd-4a13-848d-b5b4d4b36695',
    uuid:$scope.userId
}); 

PubNub.ngSubscribe({ channel: $scope.channel });

$rootScope.$on(PubNub.ngMsgEv($scope.channel), function(ngEvent, payload) {
    scope.$apply(function() {
        $scope.messages.push(payload.message);
    });
});

$rootScope.$on(PubNub.ngPrsEv($scope.channel), function(ngEvent, payload) {
    $scope.$apply(function() {
        $scope.users = PubNub.ngListPresence($scope.channel);
    });
});

PubNub.ngHereNow({
    channel: $scope.channel
});

PubNub.ngHistory({
    channel: $scope.channel,
    count: 500
});

$scope.publish = function() {
    PubNub.ngPublish({
        channel: $scope.channel,
        message: "[" + $scope.userId + "] " + $scope.newMessage
    });
    $scope.newMessage = '';
}; */


(function() {

    var output = PUBNUB.$('output'), 
        input = PUBNUB.$('input'), 
        button = PUBNUB.$('button'),
        presence = PUBNUB.$('presence');

    var channel = 'mchat';
    
    
    var p = PUBNUB.init({
        subscribe_key: 'sub-c-f762fb78-2724-11e4-a4df-02ee2ddab7fe',
        publish_key:   'pub-c-156a6d5f-22bd-4a13-848d-b5b4d4b36695'
    });

    p.subscribe({
        channel  : channel,
        callback : function(m) { 
            output.innerHTML = m.text.replace( /[<>]/ig, '' ) + '</span></p>' + output.innerHTML; 
        },

        presence: function(m){
            if(m.occupancy > 1) {
                presence.textContent = m.occupancy + ' Hay usuarios activos';
            } else {
                presence.textContent = 'No hay usuarios activos';
            }
        }
    });

    p.bind('keyup', input, function(e) {
        (e.keyCode || e.charCode) === 13 && publish()
    });

    p.bind('click', button, publish);

    function publish() {
        p.publish({
            channel : channel, 
            message : {text: input.value}, 
            x : (input.value='')
        });
    }


})();