angular
	.module('FancyNews')
	.controller(
		'RegisterController',
		function ($scope) {
			$scope.formData = {
				fullName: '',
				email: '',
				password: '',
			};

			$scope.register = function () {
				if (
					!$scope.formData.fullName ||
					!$scope.formData.email ||
					!$scope.formData.password
				) {
					alert(
						'Please fill out all fields!'
					);
					return;
				}

				let users =
					JSON.parse(
						localStorage.getItem(
							'users'
						)
					) || [];

				const isEmailTaken = users.some(
					(user) =>
						user.email ===
						$scope.formData.email
				);

				if (isEmailTaken) {
					alert(
						'This email is already registered!'
					);
					return;
				}

				const newUser = {
					fullName:
						$scope.formData.fullName,
					email: $scope.formData.email,
					password:
						$scope.formData.password,
				};

				users.push(newUser);

				localStorage.setItem(
					'users',
					JSON.stringify(users)
				);

				const token = btoa(
					$scope.formData.email +
						':' +
						Date.now()
				);
				localStorage.setItem(
					'token',
					token
				);

				alert(
					'Registration successful!'
				);

				window.location.href = '#';
				window.location.reload();
			};
		}
	);
