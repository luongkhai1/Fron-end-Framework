window.listproduct = function($scope, $http){
      var url = "http://localhost:3000/Product"
      var list = []

      $http.get(url)
            .then(function (response){
                  list = response.data
                  $scope.listproducts = list;
            })
}