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
	);
