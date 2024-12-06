angular
	.module('FancyNews')
	.controller(
		'ProfileController',
		function ($scope) {
			const storedUser = JSON.parse(
				localStorage.getItem('user')
			) || {
				name: '',
				email: '',
				about: '',
			};

			$scope.formData =
				angular.copy(storedUser);
			$scope.hasChanges = false;

			$scope.$watch(
				'formData',
				function (newVal, oldVal) {
					$scope.hasChanges =
						!angular.equals(
							newVal,
							storedUser
						);
				},
				true
			);

			$scope.updateProfile =
				function () {
					if (
						!$scope.formData.name ||
						!$scope.formData.email
					) {
						alert(
							'Name and Email are required!'
						);
						return;
					}

					const updatedUser = {
						name: $scope.formData.name,
						email:
							$scope.formData.email,
						about:
							$scope.formData.about,
					};

					localStorage.setItem(
						'user',
						JSON.stringify(updatedUser)
					);

					alert(
						'Profile updated successfully!'
					);

					angular.copy(
						$scope.formData,
						storedUser
					);
					$scope.hasChanges = false;
				};
		}
	);
