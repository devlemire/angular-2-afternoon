angular.module('chatroom').service('mainSrvc', function( $http ) {
  this.getMessages = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/chats'
    });
  };

  //On the line below create the postMessage method. This method will add data to the backend server.
  //The url for the request needs to be 'https://practiceapi.devmountain.com/api/chats'
  //Because we're making a POST request, need a data object with a message property IE data: {message: "Hello World"}
  //Also, remember that $http returns a promise. So return the whole $http call (return $http(...)), so you can then use .then in your controller.
});