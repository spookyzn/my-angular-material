export function SampleDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
      creationDate: '='
    },
    controller: SampleController,
    controllerAs: 'vm',
    // bindToController: true
  };

  return directive;
}

class SampleController {
  constructor (moment) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    // bindToController 1.5只有的新特性
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}
