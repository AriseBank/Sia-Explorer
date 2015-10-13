'use strict';

app.controller('BlockCtrl', ['$scope', 
        '$routeParams', 
        'ConversionService', 
        'ExplorerService', 
        function($scope, $routeParams, ConversionService, ExplorerService){
            $scope.ConvSrvc = ConversionService;
            $scope.hash = $routeParams.blockHash;

            ExplorerService.getBlockHash($scope.hash)
                .success(function(data){
                    $scope.block = data.Block;
                    $scope.height = data.Height;
                    $scope.block.date = new Date($scope.block.timestamp*1000);
                });
        }]);
