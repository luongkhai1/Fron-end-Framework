window.details = function($scope, $http,$routeParams){
      var url = "http://localhost:3000/Product"

      var product = {}

      $http.get(url+"/"+$routeParams.id)
            .then(function (response){
                  product = response.data
                  $scope.selectProduct = product;
                  console.log(product)
            })
}