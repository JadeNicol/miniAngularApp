var app = angular.module("angularApp");

app.controller("myController", function($scope, myService){

$scope.birds = myService.getBirds();

$scope.showBirds = true

$scope.toggle = function(){
  $scope.showBirds = !$scope.showBirds;
}

// $scope.myInput = "the input";
$scope.clickThis = function(){
  var bird = {
    commonName: $scope.commonName,
    color: $scope.color
  }
  myService.addBird(bird);
  $scope.birds = myService.getBirds();
}
$scope.test = "this is a test"

$scope.getData = function(){
  // {$$state: {},
  // error: function(){},
  // success: function(){},
  // then: function(){}
  // }
  myService.getRandomData().then(function(res){
    // console.log(res)
    $scope.data = res;
  }, function(err){
    // console.log(err)
  })
}

$scope.getData();

$scope.testPromise = function(){
  myService.promiseExample().then(function(res){
    // console.log(res);
  }, function(err){
    // console.log(err)
  })
}
$scope.testPromise()

})
