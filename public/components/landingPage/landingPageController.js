var landingPage = angular.module('landingPage', ['intern'])

landingPage.controller("landingPageCtrl", ['$scope', '$interval', '$mdSidenav', '$mdMedia','$state', function($scope, $interval, $mdSidenav, $mdMedia, $state){
    $scope.menuItems = {
        aktuelles: {
            state: "home.aktuelles",
            text: "Aktuelles",
            selected: false
        },
        termine: {
            state: "home.termine",
            text: "Termine",
            selected: false
        },
        aktivitaeten: {
            state: "home.aktivitaeten",
            text: "Aktivitäten",
            selected: false
        },
        verein: {
            state: "home.verein",
            text: "Verein",
            selected: false
        },
        vorstand: {
            state: "home.vorstand",
            text: "Vorstand",
            selected: false
        }
    }

    //Select correct menuitem according to State
    switch($state.current.name){
        case "home.termine":
            $scope.menuItems.termine.selected = true
            break;
        case "home.aktuelles":
            $scope.menuItems.aktuelles.selected = true
            break;
        case "home.aktivitaeten":
            $scope.menuItems.aktivitaeten.selected = true
            break;
        case "home.verein":
            $scope.menuItems.verein.selected = true
            break;
        case "home.vorstand":
            $scope.menuItems.vorstand.selected = true
            break;
        case "home":
            $state.go("home.aktuelles")
            $scope.menuItems.aktuelles.selected = true
            break;
    }

    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };


    $scope.isMobile = function(){
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return true
        }else{
            return false
        }
    }

    $scope.isSmall = function(){
        return !$mdMedia('gt-md')
    }

    $scope.greaterSmall = function(){
        return $mdMedia('gt-md')
    }

    $scope.goTo = function(state, key, toggleMenu){
        $state.go(state)
        if(toggleMenu){
            $mdSidenav('left').toggle();
        }

        for(var entry in $scope.menuItems){
            $scope.menuItems[entry].selected = false
        }

        if(key){
            $scope.menuItems[key].selected = true
        }
    }


    //$scope.isMobile()

}])