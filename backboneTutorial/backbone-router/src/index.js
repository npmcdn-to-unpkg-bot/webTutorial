import $ from "jquery";
import backbone from "backbone";

$(".container").html("Hello backbone!");
var Route = Backbone.Router.extend({
  routes: {
      '': 'home',
      'about': 'about',
      'pay': 'pay'
  },
    home: function() {
        $('.container').html('it is home');
    },
    about: function() {
        $('.container').html('it is about');
    },
    pay: function() {
        $('.container').html('it is pay');
    }
});
new Route();
Backbone.history.start();
