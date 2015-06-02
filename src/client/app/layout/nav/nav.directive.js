(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('mwLeftNav', mwLeftNav);

    mwLeftNav.$inject = [];

    /* @ngInject */
    function mwLeftNav () {
        // Usage:
        //  <div mw-nav-left></div mw-nav-left>
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            replace: true,
            templateUrl :'/src/client/app/layout/nav/partials/nav.tpl.html',
            scope: {
                mwLeftNavCollapse : '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
            console.log(scope);
        }
    }

    /* @ngInject */
    function Controller () {

    }
})();
