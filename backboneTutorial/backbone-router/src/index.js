import Backbone from "backbone";
import home from './router/home.js';
var HomeRoute = Backbone.Router.extend({
  routes: {
      '': 'home',
  },
  home
});
new HomeRoute();

// 延迟加载模块
require.ensure([], function(require) {
  var pay = require('./router/pay.js').default;
  var PayRoute = Backbone.Router.extend({
    routes: {
        'pay': 'pay'
    },
    pay
  });
  new PayRoute();
});
require.ensure([], function(require) {
  var about = require('./router/about.js').default;
  var AboutRoute = Backbone.Router.extend({
    routes: {
        'about': 'about',
    },
    about
  });
  new AboutRoute();
});
// import pay from './router/pay.js';
// import about from './router/about.js';

// var HomeRoute = Backbone.Router.extend({
//   routes: {
//       '': 'home',
//       // 'about': 'about',
//       // 'pay': 'pay'
//   },
//     home,
//     // about: about,
//     // pay: pay,
// });
Backbone.history.start();
