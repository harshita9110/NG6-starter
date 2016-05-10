import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import privatehomeComponent from './privatehome.component';

let privatehomeModule = angular.module('privatehome', [
  uiRouter,
  uiBootstrap
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('privatehome', {
      url: '/privatehome',
      template: '<privatehome></privatehome>'
    });
})


.component('privatehome', privatehomeComponent);

export default privatehomeModule;
