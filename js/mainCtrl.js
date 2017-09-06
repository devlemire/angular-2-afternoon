angular.module('chatroom').controller('mainCtrl', function( $scope, mainSrvc ){
    mainSrvc.getMessages().then( function( response ) {
      $scope.messages = response.data;
    });

    $scope.timeSort = "-";

    $scope.postMessage = function( msg ) {
      console.log( msg );
    }
  
    //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
    //pass that text to the postMessage method on the messageService object which will
    //then post it to the backend.
  
    //uncomment this code when your getMessages function is finished
    //This goes and gets new data every second, which mimicking a chat room experience.
    //  setInterval(function(){
      // $scope.getMessages();
  
    // }, 1500)
});