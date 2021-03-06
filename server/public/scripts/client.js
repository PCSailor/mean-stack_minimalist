var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(["$routeProvider", function (a) {
 a.when("/home", {
  templateUrl: "views/templates/home.html",
  controller: "HomeController",
  controllerAs: "home"
 }).when("/blog",
  {
   templateUrl: "views/templates/blog.html",
   controller: "BlogController",
   controllerAs: "blog"
  }).when("/menu",
  {
   templateUrl: "views/templates/menu.html",
   controller: "MenuController",
   controllerAs: "menu"
  }).when("/contact",
  {
   templateUrl: "views/templates/contact.html",
   controller: "ContactController",
   controllerAs: "contact"
  }).otherwise({
   redirectTo: "home"
  })
}]),
 myApp.controller("BlogController", ["DataService", function (a) {
  console.log("HEY! You. You are at the Blog Controller"),
   this.dataObject = a.dataObject
 }]),
 myApp.controller("ContactController", [function () {
  console.log("HEY! You. You are at the Contact Controller")
 }]),
 myApp.controller("HomeController", ["DataService", function (a) {
  var b = this;
  b.message = "Welcome Home.",
   b.someVal || (b.someVal = 1),
   b.someVal += 1,
   console.log(b.someVal),
   b.dataObject = a.dataObject
 }]),
 myApp.controller("MenuController", [function () {
  console.log("HEY! You. You are at the Menu Controller")
 }]),
 myApp.factory("DataService", function () {
  return { dataObject: {} }
 });