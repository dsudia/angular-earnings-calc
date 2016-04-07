app.controller('detailsCtrl', function($scope, mealDataService){
  $scope.mealData = {};
  $scope.id = (mealDataService.meals.length + 1)
  $scope.addMeal = function() {
    mealDataService.addMeal($scope.mealData);
    $scope.mealData = {};
    $scope.id = (mealDataService.meals.length + 1);
  }
});


app.controller('chargesCtrl', function($scope, mealDataService){
  var meals = mealDataService.getMeals();
  var max = meals.length;
  var thisMeal = 0;
  $scope.id = meals[thisMeal].id;
  $scope.base = meals[thisMeal].base;
  $scope.tax = meals[thisMeal].tax;
  $scope.tip = meals[thisMeal].tip;
  $scope.total = meals[thisMeal].total;
  $scope.next = function() {
    if (thisMeal < max) {
      thisMeal ++;
      $scope.id = meals[thisMeal].id;
      $scope.base = meals[thisMeal].base;
      $scope.tax = meals[thisMeal].tax;
      $scope.tip = meals[thisMeal].tip;
      $scope.total = meals[thisMeal].total;
    }
  }
  $scope.prev = function() {
    if (thisMeal > 0) {
      thisMeal --;
      $scope.id = meals[thisMeal].id;
      $scope.base = meals[thisMeal].base;
      $scope.tax = meals[thisMeal].tax;
      $scope.tip = meals[thisMeal].tip;
      $scope.total = meals[thisMeal].total;
    }
  }
});


app.controller('earningsCtrl', function($scope, mealDataService){
  $scope.tipTotal = mealDataService.totals.tip;
  $scope.mealCount = mealDataService.meals.length;
  $scope.averageTip = ($scope.tipTotal/$scope.mealCount);
});


app.controller('resetCtrl', function($scope, $location, mealDataService) {
  $scope.resetAll = function() {
    mealDataService.resetAll();
    $location.url('/#/');
  }
});