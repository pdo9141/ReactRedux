import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest();
    }, 1500);
  }

  onUpdateUser(event) {
    if (event && event.target && event.target.value) {
      this.props.onUpdateUser(event.target.value);
    }
    else {
      this.props.onUpdateUser('Sammy');
    }
  }

  render() {
    // console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={this.onUpdateUser}>Update user</div><br />
        {this.props.user}<br />
        <input onChange={this.onUpdateUser} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log('In mapStateToProps: ', props);

  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProps}`
  };
};

const mapActionsToProps = (dispatch, props) => {
  console.log('In mapActionsToProps: ', props);

  return bindActionCreators({
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
  }, dispatch);
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log('propsFromState: ', propsFromState);
//   console.log('propsFromDispatch: ', propsFromDispatch);
//   console.log('ownProps: ', ownProps);
//   return {};
// };

// export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
export default connect(mapStateToProps, mapActionsToProps)(App);
