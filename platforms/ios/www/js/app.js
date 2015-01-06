angular.module('sociogram', ['ionic', 'openfb','objectFilters','sociogram.controllers','sociogram.services','ionic.contrib.ui.cards'])

    .run(function ($rootScope, $state, $ionicPlatform,$window, OpenFB) {

        // OpenFB.init('1474435556106076');

 // alert($window.StatusBar);
    // StatusBar.styleDefault();
      // alert($cordovaStatusbar);
      // alert(StatusBar);
        // alert('here');
        // alert(window.StatusBar);
        // alert(StatusBar.hide);
//         if(window.StatusBar) {
//             alert("here");
//             StatusBar.backgroundColorByName("red");
//   // org.apache.cordova.statusbar required
//    // StatusBar.styleDefault(); // this should set it white
// }

// alert(wino);
  $ionicPlatform.ready(function () {
            if (window.StatusBar) {
              // alert('ere');
                // StatusBar.hide();
                // StatusBar.styleLightContent();
                // alert($cordovaStatusBar);
                // $cordovaStatusBar.style(1);
                // StatusBar.backgroundColorByName("green");
                StatusBar.overlaysWebView(true);
                StatusBar.styleLightContent();
                // StatusBar.styleDefault();
            }
// && toState.name !== "app.logout"
        });

        // $rootScope.$on('$stateChangeStart', function(event, toState) {

        //     if (toState.name !== "app.login" && toState.name !== "app.loading") {
        //         $state.go('app.login');
        //         event.preventDefault();
        //     }
        // });

        // $rootScope.$on('OAuthException', function() {
        //     $state.go('app.login');
        // });

    })


    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider


            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: "AppCtrl"
            })

            .state('app.login', {
                        url: "/login",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/login.html",
                                controller: "LoginCtrl"
                            }
                        }
                 })

             .state('app.event-detail', {
                      url: "/event-detail",
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/event-detail.html',
                          controller: "LoginCtrl"
                        }
                      }
                  })
                  .state('app.loginPrompt', {
                      url: "/loginPrompt",
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/loginPrompt.html',
                          controller: "LoginCtrl"
                        }
                      }
                  })

            .state('app.logout', {
                url: "/logout",
                views: {
                    'menuContent': {
                        templateUrl: "templates/logout.html",
                        controller: "LogoutCtrl"
                    }
                }
            })
              .state('app.friends', {
                url: "/friends",
                views: {
                    'menuContent': {
                        templateUrl: "templates/friends.html",
                        controller: "FeedCtrl"
                    }
                }
            })

            .state('app.profile', {
                url: "/profile",
                views: {
                    'menuContent': {
                        templateUrl: "templates/profile.html",
                        controller: "ProfileCtrl"
                    }
                }
            })
            .state('app.about', {
                      url: '/about',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/about.html',
                          controller: 'FeedCtrl'
                        }
                      }
                    })
                    .state('app.login2', {
                      url: '/login2',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/login2.html',
                          controller: 'LoginCtrl'
                        }
                      }
                    })
                     .state('app.loading', {
                      url: '/loading',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/loading.html',
                          controller: 'LoginCtrl'
                        }
                      }
                    })
                    .state('app.help', {
                      url: '/help',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/help.html',
                          controller: 'FeedCtrl'
                        }
                      }
                    })
                     .state('app.privacy', {
                      url: '/privacy',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/privacy.html',
                          controller: 'FeedCtrl'
                        }
                      }
                    })
                        .state('app.addAnEvent', {
                      url: '/addAnEvent',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/addAnEvent.html',
                          controller: 'FeedCtrl'
                        }
                      }
                    })
                        .state('app.newEventForm', {
                      url: '/newEventForm',
                      views: {
                        'menuContent': {
                          templateUrl: 'templates/newEventForm.html',
                          controller: 'FeedCtrl'
                        }
                      }
                    })

            .state('app.person', {
                url: "/person/:personId",
                views: {
                    'menuContent': {
                        templateUrl: "templates/person.html",
                        controller: "PersonCtrl"
                    }
                }
            })
            .state('app.feed', {
                url: "/person/:personId/feed",
                views: {
                    'menuContent': {
                        templateUrl: "templates/feed.html",
                        controller: "FeedCtrl"
                    }
                }
            });

        // fallback route
        $urlRouterProvider.otherwise('/app/login');

    });

