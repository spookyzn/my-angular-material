/**
 * Created by kenzhu on 2017/12/2.
 */
export class SampleController{
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.toastr = toastr;

    this.test = {
      'a': 1,
      'b': 2
    };

  }

  sampleFunc(arg1) {
    let $this = this;
  }
}
