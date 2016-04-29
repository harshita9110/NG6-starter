import angular from 'angular';
import uiRouter from 'angular-ui-router';
import partialhomeComponent from './partialhome.component';

let partialhomeModule = angular.module('partialhome', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('partialhome', {
      url: '/partialhome',
      template: '<partialhome></partialhome>'
    });
})

.component('partialhome', partialhomeComponent);

export default partialhomeModule;
