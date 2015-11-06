 angular.module('parseApp').controller('parseCtrl', function($scope, parseService) {

$scope.types = ['restaurant', 'strip-clubs', 'zoos', 'bars', 'deli', 'barbers/salons', 'time-machines', 'prisons', '7/11s']

$scope.addBiz = function() {
	parseService.postBiz($scope.biz).then(function(res) {
		console.log('bizness posted', res);
		$scope.bizResult = res;
		$scope.biz = {};
	}, function(err) {
		console.log('something bad ', err)
	});
}

	$scope.getBiz = function() {
		parseService.getBiz().then(function(res) {
		$scope.biznesses = res.data.results;
	})
	}

	$scope.getBiz();




 })