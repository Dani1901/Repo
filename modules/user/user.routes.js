angular
	.module('chat')
	.config(function($stateProvider){
		$stateProvider
			.state('user',{
				url: '/user',
				template: '<ui-view></ui-view>',
				abstract: true
			})
			.state('user.create',{
				url: '/create',
				templateUrl: 'modules/user/views/user.create.html',
				controller: 'UserController'
			})
			.state('user.login',{
				url: '^/login',
				templateUrl: 'modules/user/views/user.login.html',
				controller: 'UserController'
			});
			// .state('user.view',{
			// 	url: '/{userId}',
			// 	templateUrl: 'RUTA VIEW',
			// 	controller: 'UserController'
			// });
	});