import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })


   // nested list with just some random string data
   .state('home.paragraph', {
       url: '/paragraph',
       template: 'I could sure use a drink right now.'
   });
})

.component('home', homeComponent);

export default homeModule;
