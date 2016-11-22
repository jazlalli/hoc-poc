import React, { Component, PropTypes } from 'react';
import css from 'next/css';

const ruler = css({
  border: '1px solid #c0c0c0'
});

const form = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'nowrap',
  padding: '10px 0'
});

const formRow = css({
  width: '100%',
  flex: '1 0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexWrap: 'wrap'
});

const element = css({
  display: 'block',
  width: '33%',
  height: '32px',
  fontSize: '16px'
});

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log('CONSTRUCTOR');

    this.state = {
      postcode: props.postcode,
      error: ''
    };
  }

  handleKeyPress(evt) {
    if (evt.which === 13) {
      this.handleSubmit(evt, evt.target.value);
    }
  }

  handleChange(evt) {
    this.setState({
      postcode: evt.target.value,
      error: '',
    });
  }

  handleSubmit(evt, postcode) {
    evt.preventDefault();
    evt.stopPropagation();

    console.log('SUBMITTING');

    this.props.closeModal(evt, postcode);
  }

  render() {
    const {
      postcode,
      error,
    } = this.state;

    return (
      <div>
        <div>
          <h3>Delivery Address</h3>
          <hr className={ruler} />
        </div>
        <form className={form}>
          <div className={formRow}>
            <input
              className={element}
              type="text"
              placeholder="e.g. WC1E 7HJ"
              value={postcode}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleChange}
            />
            <label className={element}>{error}</label>
          </div>

          <div className={formRow}>
            <button
              type="submit"
              className={element}
              onClick={evt => this.handleSubmit(evt, postcode)}
            >
              Update Delivery Address
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddressForm.propTypes = {
  postcode: PropTypes.string
};

AddressForm.defaultProps = {
  postcode: ''
};

export default AddressForm;
