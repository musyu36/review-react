
import  React from 'react';
import  ReactDOM from 'react-dom';

import { SubComponent } from './sub-component';
import "./styles/style.scss";

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Hello React !!! </h1>
          <SubComponent name="My Counter for TypeScript"/>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));