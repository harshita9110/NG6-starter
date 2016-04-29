import template from './partialhome.html';
import controller from './partialhome.controller';
import './partialhome.less';

let partialhomeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default partialhomeComponent;
