/**
 * Created by c0ba4ken on 14.08.2017.
 */
var app = angular.module('testApp', [ ]);

app.controller('testCtrl', function($scope) {

    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order

    $scope.test = [
        { id: 1, name: 'Bella', group: 'Cat' },
        { id: 2, name: 'Shadow', group: 'Cat' },
        { id: 3, name: 'Tigger', group: 'Dog' },
        { id: 4, name: 'Charlie', group: 'Cat' },
        { id: 5, name: 'Jack', group: 'Dog' },
        { id: 6, name: 'Luna', group: 'Cat' }
    ];

    $scope.add = function() {
        $scope.test.push({
            id: $scope.id,
            name: $scope.name,
            group: $scope.group
        });
        $scope.id = $scope.name = $scope.group = '';
    };

    $scope.remove = function(id) {
        angular.forEach($scope.test, function(student, key) {
            if(student.id == id) {
                $scope.test.splice(key, 1);
            }
        });
    };


});


