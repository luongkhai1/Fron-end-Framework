window.controllerSanPham = function ($scope, $http, $location,$window) {
  var acc = JSON.parse($window.localStorage.getItem("SelectAcc"))
  var url = "http://localhost:3000/Product";
  var url1 = "http://localhost:3000/User";
  var listUser = [];

  $http.get(url1)
        .then(function (response) {
          listUser = response.data;
        })
  
  $scope.listProduct = [];

  function findObjectById(array, id) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i];
      }
    }
    return null;
  }
  //lấy dữ liệu ở db ra 
  $http
    .get(url)
    .then(function (response) {
      $scope.listProduct = response.data;
      $scope.listProduct.forEach(element => {
        element.account = findObjectById(listUser, element.UserId);
      });
    })
    .catch(function (error) {
      console.log("Loi");
    });

  $scope.Product = {
    name: "",
    img : "",
    details: "",
    time: "",
    price: "",
  };
  //save
  $scope.save = function () {
    if (checkvalidate()) {
      let Product = angular.copy($scope.Product);
      Product.UserId=acc.id;
      $http
        .post(url, Product)
        .then(function (response) {
          alert("add susscess");
          $location.path("/Qlsanpham");
        })
        .catch(function () {
          console.log("error");
        });
    }
  };
  $scope.validate = {
    nameValidate: false,
    imgValidate : false,
    detailsValidate: false,
    timeValidate: false,
    priceValidate: false,
  };

  function checkvalidate() {
    let check = true;
    if ($scope.Product.name == "") {
      $scope.validate.nameValidate = true;
      check = false;
    }
    if ($scope.Product.img == "") {
      $scope.validate.imgValidate = true;
      check = false;
    }
    if ($scope.Product.details == "") {
      $scope.validate.detailsValidate = true;
      check = false;
    }
    if ($scope.Product.time == "") {
      $scope.validate.timeValidate = true;
      check = false;
    }
    if ($scope.Product.price == "") {
      $scope.validate.priceValidate = true;
      check = false;
    }
    return check;
  }

  $scope.changeBody = function () {
    if ($scope.Product.name == "") {
      $scope.validate.nameValidate = true;
    } else {
      $scope.validate.nameValidate = false;
    }
    if ($scope.Product.img == "") {
      $scope.validate.imgValidate = true;
    } else {
      $scope.validate.imgValidate = false;
    }
    if ($scope.Product.details == "") {
      $scope.validate.detailsValidate = true;
    } else {
      $scope.validate.detailsValidate = false;
    }
    if ($scope.Product.time == "") {
      $scope.validate.timeValidate = true;
    } else {
      $scope.validate.timeValidate = false;
    }
    if ($scope.Product.price == "") {
      $scope.validate.priceValidate = true;
    } else {
      $scope.validate.priceValidate = false;
    }
  };
  //delete
  $scope.delete = function(id){
    let check = confirm("Bạn có muốn xóa k ")
    if (check) {
        $http.delete(url + "/" + id)
        .then(function(response){
          alert("delete Suscess")
        })
        .catch(function(error){
          alert("Delete Fail!")
        })
    }
  }

};
