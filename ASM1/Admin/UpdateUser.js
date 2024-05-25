window.updateUser = function ($scope, $http, $routeParams, $location) {
  $scope.User = {
    fullname: "",
    adress: "",
    age: "",
    phone: "",
    role: "",
  };
  var url = "http://localhost:3000/User";
  var urlUpdate = url + "/" + $routeParams.id;
  $http
    .get(urlUpdate)
    .then(function (response) {
      $scope.User = response.data;
    })
    .catch(function (error) {
      console.log(error);
      alert("lỗi api");
    });
  $scope.update = function () {
    let data = angular.copy($scope.User);
    $http
      .patch(urlUpdate, data)
      .then(function (response) {
        alert("Cập Nhật thành công");
        $location.path("/QlNguoiDung");
      })
      .catch(function (error) {
        alert("Loi");
      });
  };
  $scope.listUser = [];
  $http
    .get(url)
    .then(function (response) {
      $scope.listUser = response.data;
    })
    .catch(function (error) {
      console.log("Error : " + error);
    });
};
