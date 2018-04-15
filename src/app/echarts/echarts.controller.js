/**
 * Created by kenzhu on 2017/12/2.
 */
export class EchartsController{
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.toastr = toastr;

    this.test = {
      'a': 1,
      'b': 2
    };
    this.sampleChart_obj = this.sampleChart();
  }

  sampleChart() {
    let res = {};
    // echart数据
    let pageload = {
      name: 'page.load',
      datapoints: [
        { x: 2001, y: 1012 },
        { x: 2002, y: 1023 },
        { x: 2003, y: 1045 },
        { x: 2004, y: 1062 },
        { x: 2005, y: 1032 },
        { x: 2006, y: 1040 },
        { x: 2007, y: 1023 },
        { x: 2008, y: 1090 },
        { x: 2009, y: 1012 },
        { x: 2010, y: 1012 }
      ]
    };

    let firstPaint = {
      name: 'page.firstPaint',
      datapoints: [
        { x: 2001, y: 22 },
        { x: 2002, y: 13 },
        { x: 2003, y: 35 },
        { x: 2004, y: 52 },
        { x: 2005, y: 32 },
        { x: 2006, y: 40 },
        { x: 2007, y: 63 },
        { x: 2008, y: 80 },
        { x: 2009, y: 20 },
        { x: 2010, y: 25 }
      ]
    };
    // echarts 图配置
    res.config = {
      title: 'Sample Chart',
      subtitle: 'angular-echarts 使用第一例',
      debug: true,
      showXAxis: true,
      showYAxis: true,
      showLegend: true,
      stack: false
    };
    res.data = [ pageload ];
    res.multiple = [pageload, firstPaint ];
    return res;
  }

}
