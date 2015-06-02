(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['types'];

    /* @ngInject */
    function NavCtrl(types) {
        var vm = this;
        vm.title = 'NavCtrl';

        activate();

        ////////////////

        function activate() {
            return getTypes();
        }

        function getTypes () {
            types
            .getAll()
            .then(function(types) {
                vm.types = types;
                return vm.types;
            })
            .catch(function(err){
                console.log(err);
            });
        }
    }
})();
