import angular from 'angular';
import FacebookcomponentModule from './facebookcomponent'
import FacebookcomponentController from './facebookcomponent.controller';
import FacebookcomponentComponent from './facebookcomponent.component';
import FacebookcomponentTemplate from './facebookcomponent.html';



describe('Facebookcomponent', () => {
  let $rootScope, makeController,$window,manageBucketListService,$q;
  let ctrl,manageBucketListServiceMock;

  beforeEach(window.module(FacebookcomponentModule.name));


  beforeEach(inject((_$rootScope_,_$window_,_$q_) => {
    $rootScope = _$rootScope_;
    $window=_$window_;
    $q=_$q_;
    
    manageBucketListService = {
          getLoginStatus: () => {
            var deferred=$q.defer();
            deferred.resolve('success');
            return deferred.promise;
          }

        };

    ctrl =  new FacebookcomponentController(manageBucketListService,$rootScope,$window);

  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    it('has initial state', () => {

    expect(ctrl.name).to.be.equal('facebookcomponent');
  });
  });



  describe('Component', () => {
      // component/directive specs
      let component = FacebookcomponentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FacebookcomponentTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FacebookcomponentController);
      });
  });
});
