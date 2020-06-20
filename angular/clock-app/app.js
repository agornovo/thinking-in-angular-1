var app = angular.module("clockApp", []);
app.controller("TimeCtrl", TimeCtrlFn);
function TimeCtrlFn($scope) {
	var currentDate = new Date();
	$scope.timeString = currentDate.toTimeString();
	$scope.updateTime = function() {
		$scope.userName = "";
		var currentDate = new Date();
		$scope.timeString = currentDate.toTimeString();
	}
}