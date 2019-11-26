import angular from 'angular'
import 'angular-sanitize'

const airformController = function ($scope, $sce) {
  this.$onChanges = function () {
    this.email = $sce.trustAsResourceUrl(
      `https://airform.io/${this.email || 'your@email.com'}`,
    )
  }
}

airformController.$inject = ['$scope', '$sce']

angular.module('ngAirform', ['ngSanitize']).component('airform', {
  controller: airformController,
  template: `
      <form action="{{$ctrl.email}}" method="post">
        <ng-transclude></ng-transclude>
      </form>
    `,
  transclude: true,
  bindings: {
    email: '@',
  },
})
