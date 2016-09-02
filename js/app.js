/**
 * アプリケーションの定義
 */
var app = angular.module("testApp", []);

/**
 * controllerでアプリケーションの機能を設定する
 */
app.controller('testAppController1', function(){
  this.message = "First App 1";
});
