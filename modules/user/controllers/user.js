angular
	.module('chat')
	.controller('UserController', function($scope, $state, /*UserService, ParseAuthentication,*/ 
		$stateParams){
		$scope.error = false;
		
		$scope.create = function() {
			/*var instance = $("#createuser").parsley();
			if(instance.isValid()){*/
				UserService.create($scope.newUser).then(function(newUser){
					$state.go('chat.view', { userId: newUser.id });
				/*});*/
			});
		};
		// $scope.userSession = ParseAuthentication.user();
		// if (!$scope.userSession) {
		// 	$state.go('user.login');
		// }
		// $scope.getLogin = function(){
		// 	$scope.loginData = {
		// 		username : '',
		// 		password : '' 
		// 	};
		// 	if (ParseAuthentication.user()) {
		// 		$state.go('home');
		// 	}
		// };

		// $scope.login = function(){
		// 	$scope.user = ParseAuthentication.login($scope.loginData, function(){
		// 		$state.go('home');
		// 	},
		// 	function(error){
		// 		//Mostrar mensaje de error 
		// 		if(error.code == 101){
		// 			$scope.$apply(function(){
		// 				$scope.messageError = "Usuario o contraseña incorrectos"
		// 			});
		// 		} else{
		// 			$scope.$apply(function(){
		// 				$scope.messageError = error.message;
		// 			});
		// 		}
		// 	});
			
		// }

			// UserService.addToRole('Administrator',Parse.User.current());
		

		// $scope.deleteUser = function(id){
		// 	$state.go('user.list');
		// 	$('.modal-backdrop').remove();
		// }
	});