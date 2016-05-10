import PrivatehomeModule from './privatehome'
import PrivatehomeController from './privatehome.controller';
import PrivatehomeComponent from './privatehome.component';
import PrivatehomeTemplate from './privatehome.html';

describe('Privatehome', () => {
  let $rootScope, makeController,$q,manageBucketListService,$window,$location;

  beforeEach(window.module(PrivatehomeModule.name));
  beforeEach(inject((_$rootScope_,_$q_,_$window_,_$location_) => {
    $rootScope = _$rootScope_;
    $q=_$q_;
    $window=_$window_;
    $location=_$location_;
    manageBucketListService = {
          verifyToken: (token) => {
            var deferred=$q.defer();
            deferred.resolve('success');
            return deferred.promise;
          },
          getData:(token)=>{
            var deferred=$q.defer();
            deferred.resolve('success');
            return deferred.promise;
          }

        };
    makeController = () => {
      return new PrivatehomeController($window,manageBucketListService,$location);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PrivatehomeTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PrivatehomeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PrivatehomeTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PrivatehomeController);
      });
  });
});
