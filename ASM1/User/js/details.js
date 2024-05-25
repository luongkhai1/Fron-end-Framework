myapp.controller("details",function($scope,$window){
      $scope.selectProduct = JSON.parse($window.localStorage.getItem('selectProduct'))
})