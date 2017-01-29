(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    return fetchContent("/categories.json");
  }

  service.getItemsForCategory = function (categoryShortName) {
    return fetchContent("/menu_items.json?category=" + categoryShortName);
  }

  function fetchContent(url) {
    return $http({
      method: "GET",
      url: (ApiBasePath + url)
    })
    .then(function (result) {
      console.log("Return: ")
      console.log (result.data)
      return result.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }

}
})();
