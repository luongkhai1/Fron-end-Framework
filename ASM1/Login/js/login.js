var myapp = angular.module( 'myapp', [] );
myapp.controller("login",($scope, $http, $window)=>{
      var url = "http://localhost:3000/User"
      var Users = []
      $http.get(url)
            .then((response) => {
                  Users = response.data
            });  
      $scope.login =  function(){
            var user = angular.copy( $scope.User )
            var usernew = {}
            for (let index = 0; index < Users.length; index++) {
                 if (user.fullname == Users[index].fullname && user.password == Users[index].password) {
                        usernew = Users[index]
                        break;
                 }else{
                        usernew = null;
                 }
            }
            if (usernew!= null) {
                  if (usernew.role == "User") {
                        window.location.href= "http://127.0.0.1:5500/ASM1/User/src/trangchu.html#!/"
                  }else{
                        window.location.href= "http://127.0.0.1:5500/ASM1/Admin/index.html#!/"
                  }
                  $window.localStorage.setItem('SelectAcc', JSON.stringify(usernew));
            }else{
                  alert("Full name or Password incorect");
            }
      }
})