angular
	.module('FancyNews')
	.controller(
		'MainController',
		function ($scope) {
			$scope.products = [];
			$scope.isLoading = true;

			fetch(
				'https://fakestoreapi.com/products'
			)
				.then((response) =>
					response.json()
				)
				.then((data) => {
					$scope.products = data.slice(
						0,
						5
					);
					$scope.isLoading = false;
					$scope.$apply();
				})
				.catch((error) => {
					console.error(
						'Error fetching products:',
						error
					);
					$scope.isLoading = false;
					$scope.$apply();
				});
		}
	)
	.controller(
		'NavController',
		function ($scope) {
			$scope.isSignedIn =
				!!localStorage.getItem('token');

			$scope.signOut = function () {
				localStorage.removeItem(
					'token'
				);
				$scope.isSignedIn = false;
				window.location.reload();
			};
			$scope.redirectToHome =
				function () {
					window.location.href = '#';
					setTimeout(() => {
						window.location.reload();
					}, 0);
				};
		}
	);
