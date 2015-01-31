var myApp = angular.module('myApp', []);

myApp.controller('RedditController', ['$scope', function($scope){

  $scope.link = "";
  $scope.found = false;
 
    $scope.ok = function() {
        var url = "http://www.reddit.com/search.json?q=url:" + $scope.link + "&sort=best";
        $scope.elements = [];
        $scope.found = true;
        $.getJSON(url, function(data){
            var dataset = data.data.children;
            
            for (var i=0; i<dataset.length; i++ ){

                $scope.$apply(function(){
                    $scope.elements.push(dataset[i].data); // response data 
                    console.log($scope.elements[i]);
                });   
            } 
          }
        )
    };


}]); 



//lifesaver: 
//http://stackoverflow.com/questions/14716822/using-jquerys-ajax-within-an-angularjs-controller

