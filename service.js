var app = angular.module("angularApp");

app.service("myService", function($http, $q){

var birds = [{commonName:"red-breasted merganser", color: "red"}, {commonName:"cedar waxwing",color: "rufous"},{commonName: "eurasion wigeon", color:"boring"}]

this.getBirds = function(){
  return birds.slice();
};

this.addBird = function(newBird){
  birds.push(newBird)
}

this.getRandomData = function(){
  var deferred = $q.defer();

  $http({
    url: "http://reqr.es/api/users",
    method: "GET"
  }).then(function(res){
    console.log(res)
    deferred.resolve(res.data.data)
  }, function(err){
    deferred.reject(err)
  })
  
  return deferred.promise
}

this.promiseExample = function(){
  var deferred = $q.defer();
  var me = {
    name: "Jason",
    hometown: "Burley, ID",
    sayName: function(){
      alert("jason")
    }
  }
  if(me.name === "Jason"){
    deferred.resolve(me);
  } else {
    deferred.reject("the promise rejected");
  }
  return deferred.promise;
}

// get
// post
// put
// delete

})
