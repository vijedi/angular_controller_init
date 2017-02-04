(function() {
    var module = angular.module('controllerInit', []);
    
    var ScopedControllerDef = [
        '$scope',
        ScopedControllerFunc
    ];

    var CtrlAsControllerDef = [
        CtrlAsControllerFunc
    ];

    var Component = {
        templateUrl: '/component-tpl.html',
        controller: ComponentCtrl
    };
    
    module.controller('ScopedCtrl', ScopedControllerDef)
        .controller('CtrlAsCtrl', CtrlAsControllerDef)
        .directive('directiveWithCtrl', DirectiveWithCtrl)
        .component('componentCtrl', Component)
    ;

    angular.element(document).ready(function() { 
        angular.bootstrap(document, ['controllerInit']);
    });
    
    function ScopedControllerFunc($scope) { 
        this.$onInit = function() {
            $scope.did_on_init = true;
        };
    }
    
    function CtrlAsControllerFunc() { 
        var $ctrl = this;
        $ctrl.$onInit = function() {
            $ctrl.did_on_init = true;
        };
    }

    function DirectiveWithCtrl() { 
        return {
            templateUrl: '/directive-tpl.html',
            controller: [
                ControllerFunc
            ],
            controllerAs: '$drctv'
        }

        function ControllerFunc() { 
            var $drctv = this;
            $drctv.$onInit = function() {
                $drctv.did_on_init = true;
            };
        }
    }

    function ComponentCtrl() { 
        var $ctrl = this;
        $ctrl.$onInit = function() {
            $ctrl.did_on_init = true;
        };
    }
})();
