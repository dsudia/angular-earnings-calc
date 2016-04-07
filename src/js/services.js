app.service('mealDataService', function() {
  var mealClass = {};

  mealClass.meals = [];
  
  mealClass.totals = {
    tip: 0,
    tax: 0,
    base: 0
  };

  mealClass.getMeals = function () {
    return mealClass.meals;
  };

  mealClass.getCumulativeTotals = function () {
    return totals;
  };

  mealClass.addMeal = function (mealData) {
    var newMeal = {};
    newMeal.id = (mealClass.meals.length + 1)
    newMeal.base = mealData.base;
    newMeal.tip = ((mealData.tip / 100) * mealData.base);
    newMeal.tax = ((mealData.tax / 100) * mealData.base);
    newMeal.total = (newMeal.base + newMeal.tip + newMeal.tax);

    mealClass.meals.push(newMeal);

    mealClass.totals.tip += ((mealData.tip / 100) * mealData.base);
    mealClass.totals.tax += ((mealData.tax / 100) * mealData.base);
    mealClass.totals.base += mealData.base;

    return mealClass.getMeals();
  };

  mealClass.resetAll = function() {
    mealClass.meals.length = 0;
    mealClass.totals.tip = 0;
    mealClass.totals.tax = 0;
    mealClass.totals.base = 0;
  };

  return mealClass;
});