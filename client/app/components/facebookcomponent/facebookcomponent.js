import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import facebookcomponentComponent from './facebookcomponent.component';

let facebookcomponentModule = angular.module('facebookcomponent', [
  uiRouter,
  uiBootstrap
]).
config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('facebookcomponent', {
      url: '/facebookcomponent',
      template: '<facebookcomponent></facebookcomponent>'
    });
})

.component('facebookcomponent', facebookcomponentComponent);

export default facebookcomponentModule;
