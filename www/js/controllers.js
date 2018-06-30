var appCitationsControllers = angular.module('appCitationsControllers', []);

appCitationsControllers
.controller('HomeCtrl', function($scope, CitationsFactory) {


  // console.log(CitationsFactory);
  $scope.citation = CitationsFactory.getRandCitation();
  var actualCitationId = $scope.citation.id;
  $scope.citationReload = function(){
    // console.log(CitationsFactory.getRandCitation());
    $scope.citation = CitationsFactory.getRandCitation();
  };

  $scope.prevCitation = function(actualCitationId){
    console.log(actualCitationId);
    $scope.citation = CitationsFactory.getPrevCitation(actualCitationId);
  };

  $scope.nextCitation = function(actualCitationId){
    console.log(actualCitationId);
    $scope.citation = CitationsFactory.getNextCitation(actualCitationId);
  };

  // Day of year :
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  // console.log(day);
})

.controller('SearchCtrl', function($scope, CitationsFactory) {
  $scope.citations = CitationsFactory.citationsAll;
  console.log(CitationsFactory.citationsAll[1].text);
  // $scope.share = function(id){
  //   console.log(id);
  //   var citationToShare = CitationsFactory.citationsAll[id];
  //   console.log(citationToShare);
  //   $cordovaSocialSharing.share('This is my message', 'Subject string', null, 'https://www.crea7.agency');
  // };
});
