(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('includeReplace', includeReplace);

    /* @ngInject */
    function includeReplace () {
        // Usage:
        // <div ng-include src="'path'" include-replace>
        // Creates:
        // replace conten loaded by ngInnclude
        var directive = {
            require: 'ngInclude',
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            element.replaceWith(element.children());
        }
    }
})();
