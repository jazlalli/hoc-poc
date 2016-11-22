import React, { Component } from 'react';
import Link from 'next/link';
import css from 'next/css';
import Nav from '../components/Nav';
import modalify from '../components/modalify';
import AddressForm from '../components/AddressForm';

const AddressModalTrigger = (props) => (
  <a {...props}></a>
);

const AddressFormModal = modalify(AddressModalTrigger, AddressForm);

const pageStyle = css({
  fontFamily: `-apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
  fontSize: '100%',
  maxWidth: '1020px',
  margin: '0 auto',
  padding: 0,
  border: 0
});

const headerStyle = css({
  fontSize: '42px',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onModalClose = this.onModalClose.bind(this);
    this.state = {
      postcode: 'SOME INITIAL VALUE'
    };
  }

  onModalClose(evt, postcode) {
    this.setState({
      postcode,
    });
  }

  render() {
    return (
      <div className={pageStyle}>
        <h1 className={headerStyle}>Next App</h1>

        <Nav />

        <AddressForm />
        <AddressFormModal
          postcode={this.state.postcode}
          onModalClose={this.onModalClose}
          modalOpenTriggerText="Close Modal"
          modalClosedTriggerText="Open Modal"
        />
      </div>
    );
  }
}
