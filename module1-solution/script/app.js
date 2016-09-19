(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController' , CheckController);

CheckController.$inject = ['$scope'];
function CheckController ($scope) {
  $scope.text = "";
  $scope.message = "";
  $scope.clr = "";
  $scope.border_clr = "";

  $scope.ChkIfTooMuch = function () {
    var textSplit = $scope.text.split(",");
    var count = textSplit.length;

    for (var i=0 ; i < textSplit.length; i++) {
      if (textSplit[i].match(/^ *(?!.)/)){  // I do NOT consider and empty item,
                                            //  i.e., `, ,` as an item towards to the count.
        count = count - 1;
      };
    };
    console.log(count);
    if (count === 0){
      $scope.message = "Please enter data first";
      $scope.clr = "red";
      $scope.border_clr = "red-border";
    } else if (count <= 3) {
      $scope.message = "Enjoy!";
      $scope.clr = "green";
      $scope.border_clr = "green-border";
    } else if (count > 3) {
      $scope.message = "Too much!";
      $scope.clr = "green";
      $scope.border_clr = "green-border";
    };
  };
}

})();
