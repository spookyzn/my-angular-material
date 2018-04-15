export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
    })
    .state('formly', {
        url: '/formly',
        templateUrl: 'app/formly/material.html',
        controller: 'MaterialController',
        controllerAs: 'vm'
    })
    .state('layout', {
        url: '/layout',
        templateUrl: 'app/layout/layout.html',
        controller: 'LayoutController',
        controllerAs: 'vm'
    })
    .state('echarts', {
      url: '/echarts',
      templateUrl: 'app/echarts/echarts.html',
      controller: 'EchartsController',
      controllerAs: 'vm'
    })
    .state('theme', {
        url: '/theme',
        templateUrl: 'app/theme/theme.html',
        controller: 'ThemeController',
        controllerAs: 'vm'
    });


  $urlRouterProvider.otherwise('/');
}
