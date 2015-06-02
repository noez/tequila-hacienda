(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('shared', shared);

    shared.$inject = [];

    /* @ngInject */
    function shared() {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {

        }
    }
})();
