angular
	.module('FancyNews')
	.controller(
		'LoginController',
		function ($scope) {
			$scope.formData = {
				email: '',
				password: '',
			};

			$scope.login = function () {
				let users =
					JSON.parse(
						localStorage.getItem(
							'users'
						)
					) || [];

				const user = users.find(
					(u) =>
						u.email ===
							$scope.formData.email &&
						u.password ===
							$scope.formData.password
				);

				if (user) {
					localStorage.setItem(
						'token',
						JSON.stringify(user)
					);

					alert('Login successful!');

					window.location.href = '#';
					window.location.reload();
				} else {
					alert(
						'Invalid email or password!'
					);
				}
			};
		}
	);
