describe('app testing', function(){

    beforeEach(module('angularJSTestingApp'));

    describe('MainCtrl', function(){
        var scope, ctrl;

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('MainCtrl', {$scope: scope});
        }));

        afterEach(function(){
            //Cleanup code
        });

        it('should initialise the title in the scope', function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Testing AngularJS Applications');
        });
    });

});