angular
	.module('chat')
	.config(function($stateProvider){
		$stateProvider
			.state('chat',{
				url: '/chat',
				template: '<ui-view></ui-view>',
				abstract: true
			})
			.state('chat.view',{
				url: '/view',
				templateUrl: 'modules/chat/views/chat.view.html',
				controller: 'ChatController'
			});
			// .state('chat.view',{
			// 	url: '/{userId}',
			// 	templateUrl: 'RUTA VIEW',
			// 	controller: 'UserController'
			// });
	});