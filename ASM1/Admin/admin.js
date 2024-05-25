window.myCtrl = function ($scope, $http, $routeParams, $location) {
  var url = "http://localhost:3000/User";
  


  $scope.listUser = [];



  $http
    .get(url)
    .then(function (response) {
      $scope.listUser = response.data;
    })
    .catch(function (error) {
      console.log("Error : " + error);
    });

  $scope.User = {
    fullname: "",
    adress: "",
    age: "",
    phone: "",
    role: "",
  };
  $scope.save = function () {
    if (checkvalidate()) {
      let User = angular.copy($scope.User);
      $http
        .post(url, User)
        .then(function (response) {
          alert("Add susscess");
          $location.path("/QlNguoiDung");
        })
        .catch(function () {
          alert("Fail to add user");
        });
    }
  };
  $scope.validate = {
    fullnameValidate: false,
    adressValidate: false,
    ageValidate: false,
    phoneValidate: false,
    roleValidate: false,
  };
  function checkvalidate() {
    let check = true;
    if ($scope.User.fullname == "") {
      $scope.validate.fullnameValidate = true;
      check = false;
    }
    if ($scope.User.adress == "") {
      $scope.validate.adressValidate = true;
      check = false;
    }
    if ($scope.User.age == "") {
      $scope.validate.ageValidate = true;
      check = false;
    }
    if ($scope.User.phone == "") {
      $scope.validate.phoneValidate = true;
      check = false;
    }
    if ($scope.User.role == "") {
      $scope.validate.roleValidate = true;
      check = false;
    }
    return check;
  }
  $scope.changeBody = function () {
    if ($scope.User.fullname == "") {
      $scope.validate.fullnameValidate = true;
      return 
    } else {
      $scope.validate.fullnameValidate = false;
    }
    if ($scope.User.adress == "") {
      $scope.validate.adressValidate = true;
      return
    } else {
      $scope.validate.adressValidate = false;
    }
    if ($scope.User.age == "") {
      $scope.validate.ageValidate = true;
      return
    } else {
      $scope.validate.ageValidate = false;
    }
    if ($scope.User.phone == "") {
      $scope.validate.phoneValidate = true;
      return
    }else{
      $scope.validate.phoneValidate = false;
    }
    if ($scope.User.role == "") {
      $scope.validate.roleValidate = true;
      return
    } else {
      $scope.validate.roleValidate = false;
    }
  };

  // delete
  $scope.delete = function (id) {
    let check = confirm("Bạn có muốn xóa k");
    if (check) {
      $http
        .delete(url + "/" + id)
        .then(function (response) {
          alert("delete suscess");
        })
        .catch(function (error) {
          alert("delete Fail!");
        });
    }
  };
};
