import angular from 'angular';
import angularMeteor from 'angular-meteor';
import Template from './todosList.html';

class TodosListCtrl {
  contructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 2'
    }];
  }
}

export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todosList/todosList.html',
    controller: TodosListCtrl
  });
