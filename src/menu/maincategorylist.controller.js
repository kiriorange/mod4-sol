(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);

// MainCategoryListController.$inject = ['MenuDataService']
// function MainCategoryListController (MenuDataService) {
//   var mainList = this;
//
//   var promise = MenuDataService.getAllCategories();
//   promise.then(function (result) {
//     mainList.items = result;
//   })
// }

MainCategoryListController.$inject = ['categories'];
function MainCategoryListController(categories) {
  var mainList = this;
  mainList.categories = categories;
  mainList.item = "hi"
}

})();
