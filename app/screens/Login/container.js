import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import LoginComponent from './index.js';

const mapStateToProps = state => ({
  logged: state.logged
})

const mapDispatchToProps = (dispatch) => ({
  login: () => { dispatch({ type: 'LOGIN' }) },
  logout: () => { dispatch({ type: 'LOGOUT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)