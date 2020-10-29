import React, { Component } from 'react';
import Home from './HomeComponent';
import What from './WhatComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Common from './CommonComponent';
// import About from './AboutComponent';
// import Menu from './MenuComponent';
// import Contact from './ContactComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchQuestions} from '../redux/ActionCreators';
// import {TransitionGroup,CSSTransition} from 'react-transition-group';

const mapStateToProps = state => {
    return{
        questions: state.questions,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchQuestions: () => {dispatch(fetchQuestions())}
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {

    return (
      <div>
          <Router>
            <Header />
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/what' component={What} />
              <Route path='/questions' component={() => <Common questions={this.props.questions} />} />
              <Redirect to="/home" />
            </Switch>
            <Footer />
          </Router>
      </div>
    );
  }
}

//export default Main;


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));