angular.module("myapp").component("movieList", {
  templateUrl: "movie-template.html",
  bindings: { data: "@" },
  controller: function PhoneListController() {
    this.movie = JSON.parse(this.data);
  },
});
