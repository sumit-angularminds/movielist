angular
  .module("myapp", [])
  .controller("HelloController", function ($scope, $http) {
    $scope.searchText = "";
    $scope.moviesList = [];

    $scope.searchMovies = function () {
      console.log("searchMovies: ", $scope.searchText);

      let url = `http://www.omdbapi.com/?s=${$scope.searchText}&apikey=8cc581c9`;

      $http.get(url).then(function (response) {
        console.log("response");
        console.log(response);

        $scope.moviesList = response && response.data && response.data.Search;
      });
    };
  });
