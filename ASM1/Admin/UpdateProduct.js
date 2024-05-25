window.UpdateProduct = function ($scope, $http, $routeParams, $location) {
  var url = "http://localhost:3000/Product";
  $scope.Product = {
    name: "",
    details: "",
    time: "",
    price: "",
  };
  var urlUpdate = url + "/" + $routeParams.id;
  $http
    .get(urlUpdate)
    .then(function (response) {
      $scope.Product = response.data;
    })
    .catch(function (error) {
      alert("loi");
    });
  $scope.update = function () {
    let data = angular.copy($scope.Product);
    $http
      .patch(urlUpdate, data)
      .then(function (response) {
        alert("cập nhật thành công");
      })
      .catch(function (error) {
        alert("loi");
      });
  };
  $scope.listProduct = [];
  //lấy dữ liệu ở db ra
  $http
    .get(url)
    .then(function (response) {
      $scope.listProduct = response.data;
    })
    .catch(function (error) {
      console.log("Loi");
    });
};
