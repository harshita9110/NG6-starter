import angular from 'angular';
import submitservice from './submitservice';
import manageBucketListService from './manageBucketListService';

export default angular
  .module('app.services', [])
  .service({
  submitservice,
  manageBucketListService
  });
