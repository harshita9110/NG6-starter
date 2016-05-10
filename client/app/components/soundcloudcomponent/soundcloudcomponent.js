import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import soundcloudcomponentComponent from './soundcloudcomponent.component';

let soundcloudcomponentModule = angular.module('soundcloudcomponent', [
  uiRouter,
  uiBootstrap
])
.
config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('soundcloudcomponent', {
      url: '/soundcloudcomponent',
      template: '<soundcloudcomponent></soundcloudcomponent>'
    });
})

.component('soundcloudcomponent', soundcloudcomponentComponent);

export default soundcloudcomponentModule;
