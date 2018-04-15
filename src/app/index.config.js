export function config ($logProvider, $mdThemingProvider, toastrConfig) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  /*
    primaryPalette - 主色调
    accentPalette - 次要色调
    warnPalette - 警告色调
    backgroudPalette - 背景色调
   */

  $mdThemingProvider.theme('default')
    .primaryPalette('pink', {
      'default': '400',
      'hue-1': '100',
      'hue-2': '600',
      'hue-3': 'A100'
    })
    .accentPalette('orange')
    .warnPalette('red')
    .backgroundPalette('grey');
}
