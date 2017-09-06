<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, you will be provided with a project skeleton for a DevMountain chat room. It will be up to you to hook up all the Angular files and build out the Angular controller and service to fetch messages from a live API. This project should provide good practice using a controller with a service that makes API calls using `$http`.

Live Example: <a href="#">Click Me!</a>

<b>Finished Image here</b>

## Step 1

### Summary

In this step, we'll hook up our Angular application, controller, and service into `index.html`.

### Instructions

* Open `index.html` and find the `<!-- your scripts here -->` comment.
* Add a new `script` tag for `js/app.js`.
* Add a new `script` tag for `js/mainCtrl.js`.
* Add a new `script` tag for `js/mainSrvc.js`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `index.html` and finding the `<!-- your scripts here -->`. This is the perfect spot to load in our Angular javascript files because it is just below the AngularJS CDN. We'll need to add a new `script` tag for all our Angular files in the `js/` folder.

```html
<script src="js/app.js"></script>
<script src="js/mainCtrl.js"></script>
<script src="js/mainSrvc.js"></script>
```

</details>

### Solution

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE HTML>
<html ng-app="chatroom">
  <head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body ng-controller="mainCtrl">
    <div class="main-container">
      <h1> DevMountain Chat Room </h1>
      <form ng-submit="postMessage(message)">
        <input class="form-control text-box" type="text" ng-model="message" placeholder="Message">
      </form>
      <div class="messages-container">
        <p ng-repeat="message in messages ">
          {{message.message}} </p>
      </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
    <!-- your scripts here -->
    <script src="js/app.js"></script>
    <script src="js/mainCtrl.js"></script>
    <script src="js/mainSrvc.js"></script>
  </body>
</html>
```

</details>

## Step 2

### Summary

In this step, we'll modify our Angular service to fetch messages from a live API.

## Step 3

### Summary

In this step, we'll modify our Angular controller to communicate with our service to get the `messages` on `$scope`.

## Step 4

### Summary

In this step, we'll modify the `HTML` to also display what time the message was created.

## Step 5

### Summary

In this step, we'll modify the `HTML` to make the messages sortable by the time they were created.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>