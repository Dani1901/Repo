angular.module('chat')
.controller('ChatController', function($rootScope, $scope, $state, $location, PubNub) {
  // make up a user id (you probably already have this)
  $scope.userId   = "User " + Math.round(Math.random() * 1000);
  // make up a channel name
  $scope.channel  = 'pura vida';
  // pre-populate any existing messages (just an AngularJS scope object)
  $scope.messages = ['' + $scope.channel];
  if (!$rootScope.initialized) {
    // Initialize the PubNub service
    PubNub.init({
      subscribe_key: 'sub-c-abc6d866-ff3f-11e5-a492-02ee2ddab7fe',
      publish_key: 'pub-c-5a8934ed-7c39-44a2-87b3-804e5a55c62d',
      uuid:$scope.userId
    });
    $rootScope.initialized = true;
  }
  // Subscribe to the Channel
  PubNub.ngSubscribe({ channel: $scope.channel });
  // Create a publish() function in the scope
  $scope.publish = function() {
    PubNub.ngPublish({
      channel: $scope.channel,
      message: "[" + $scope.userId + "] " + $scope.newMessage
    });
    $scope.newMessage = '';
  };
  // Register for message events
  $rootScope.$on(PubNub.ngMsgEv($scope.channel), function(ngEvent, payload) {
    $scope.$apply(function() {
      $scope.messages.push(payload.message);
    });
  });
  // Register for presence events (optional)
  $rootScope.$on(PubNub.ngPrsEv($scope.channel), function(ngEvent, payload) {
    $scope.$apply(function() {
      $scope.users = PubNub.ngListPresence($scope.channel);
    });
  });
  // Pre-Populate the user list (optional)
  PubNub.ngHereNow({
    channel: $scope.channel
  });
  
  // Populate message history (optional)
  PubNub.ngHistory({
    channel: $scope.channel,
    count: 500
  });
});