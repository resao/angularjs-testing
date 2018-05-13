describe('app testing', function(){

    describe('MainCtrl', function(){
        it('should initialise the title in the scope', function(){
            module('angularJSTestingApp');
            
            var scope = {};
            var ctrl;

            inject(function($controller){
                ctrl = $controller('MainCtrl', {$scope: scope});
            });

            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Testing AngularJS Applications');
        });
    });
    
});