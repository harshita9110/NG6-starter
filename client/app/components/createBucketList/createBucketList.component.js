import template from './createBucketList.html';
import controller from './createBucketList.controller';
import './createBucketList.styl';

let createBucketListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default createBucketListComponent;
