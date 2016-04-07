var ProductTable = React.createClass({

});
var SearchBar = React.createClass({
  render: function() {
    return (
      <div>
        <input />
      </div>
    );
  }
});

var FilerableProductTable = React.createClass({
  render: function() {
    return (
      <div>
          <SearchBar />
          <ProductTable products={this.props.products} />
      </div>
    );
  }
})


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilerableProductTable></FilerableProductTable>,
  document.getElementById('container')
);

// ReactDOM.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('container')
//  );
