import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import homeComponent from './home.component';
import onEscape from './escape.directive';



let homeModule = angular.module('home', [
  uiRouter,
  uiBootstrap

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

.component('home', homeComponent)
.directive({onEscape})
;

export default homeModule;
