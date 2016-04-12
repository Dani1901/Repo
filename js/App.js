angular
    .module('chat',[
        'ui.router',
        'pubnub.angular.service'
    ])
    .config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });

$(document).ready(function(){
    $(".button-collapse").sideNav();//Invocacion a reponsive
}); 

