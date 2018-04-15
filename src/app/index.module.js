/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// controllers
import { MainController } from './main/main.controller';
import { MaterialController } from './formly/material.controller';
import { LayoutController } from './layout/layout.controller';
import { ThemeController } from './theme/theme.controller';
import { EchartsController } from './echarts/echarts.controller';

// services
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('materialAngular',
    [ 'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ui.router',
      'ngMaterial',
      'toastr',
      'formlyMaterial',
      'angular-echarts'
    ])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('MaterialController', MaterialController)
  .controller('LayoutController', LayoutController)
  .controller('ThemeController', ThemeController)
  .controller('EchartsController', EchartsController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
