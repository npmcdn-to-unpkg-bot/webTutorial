import React from 'react';
import styles from './app.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    console.log(styles);
    return (
      <div>
        <h1 className={styles.header} >Hello World!</h1>
        <p className={styles.footer} >copyright &copy;</p>
      </div>
    );
  }
}
