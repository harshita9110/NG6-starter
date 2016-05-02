import angular from 'angular';
import uiRouter from 'angular-ui-router';
import createBucketListComponent from './createBucketList.component';

let createBucketListModule = angular.module('createBucketList', [
  uiRouter
])

.component('createBucketList', createBucketListComponent);

export default createBucketListModule;
